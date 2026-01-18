if (-not (Test-Path -Path "./judge_backend_s" -PathType Container)) {
    Write-Host "Directory ./judge_backend_s not found. Expanding archive..."
    Expand-Archive -Path "judge-backend_s.zip" -DestinationPath "./judge_backend_s"
}
cd judge_backend_s/judge-backend
python app.py