import os, subprocess, psutil

commands = [
        {cmd = ["D:\Softwares\Softswich\SSwitch.exe"], method = "check-run"}
    ]

for task in commands:
    subprocess.Popen(task.cmd)
