const {exec} = require('child_process')
const path = require('path')

const executeDart = (filepath)=> {

    return new Promise((resolve, reject) => {

        const uniqueName = path.basename(filepath).split(".")[0];

        const wayName = path.join(__dirname, "../dart_runner")
        console.log("FileStore: ", wayName)
        exec(
            `cd ${wayName} && dart ${uniqueName}.dart`,
            (error,stderr,stdout)=> {
                if(error){
                    console.error("execution error:", error);
                    reject(error);
                }
                else if(stderr) {
                    console.error("stderr:", stderr);
                    reject(stderr);
                }
                else {
                    console.log("stdout:", stdout);
                    resolve(stdout);
                }
            }
        );
    });
};

module.exports = {
    executeDart
}