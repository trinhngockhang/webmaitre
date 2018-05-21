exports.handleScript = (path) => {
    if(typeof document !== undefined) {
        const script = document.getElementById("script");
        script.src = path;
        script.async = true;
    }
} 