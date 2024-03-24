const getStoragedJobApplication = id => {
    const storedJobApplication = localStorage.getItem('job-applications');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}
const saveJobApplication = strId => {
    const id = parseInt(strId);
    const storedJobApplication = getStoragedJobApplication();
    const exists = storedJobApplication.find(jobId => jobId === id);
    if(!exists){
        storedJobApplication.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplication))
    }
    console.log(storedJobApplication)
}

export {getStoragedJobApplication, saveJobApplication}