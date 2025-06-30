const {exec} = require('child_process');
const path = require('path')

const executePy = (filepath)=> {

    return new Promise((resolve, reject)=> {

        const uniqueName = path.basename(filepath).split(".")[0];

        const wayName = path.join(__dirname, "../python_runner")
        console.log("File Location:", wayName)
        exec(
            `cd ${wayName} && python ${uniqueName}.py`,
            (error,stdout,stderr)=> {
                if(error){
                    console.error("Python execution error: ", error);
                    reject(error);
                }
                else if(stderr) {
                    console.error("Python stderr: ", stderr);
                    reject(stderr);
                }
                else {
                    console.log("Python stdout: ", stdout);
                    resolve(stdout);
                }
            }
        );
    });
};

module.exports = {
    executePy
}