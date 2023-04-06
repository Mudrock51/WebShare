document.getElementById("analyzeBtn").addEventListener("click", analyzeResume);

function analyzeResume() {
    let resumeInput = document.getElementById("resumeInput").value;
    let resumeFile = document.getElementById("resumeFile").files[0];

    if (resumeFile) {
        let reader = new FileReader();
        reader.onload = function (e) {
            let resumeText = e.target.result;
            showAnalysisResult(analyzeText(resumeText));
        };
        reader.readAsText(resumeFile, "UTF-8");
    } else if (resumeInput) {
        showAnalysisResult(analyzeText(resumeInput));
    } else {
        alert("请上传简历文件或输入简历内容");
    }
}

function analyzeText(text) {
    let words = text.split(/\s+/);
    let wordCount = words.length;
    return `简历共有 ${wordCount} 个词汇。`;
}

function showAnalysisResult(result) {
    document.getElementById("analysisResult").innerHTML = `<p>${result}</p>`;
}
