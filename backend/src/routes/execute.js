import express from "express";
import { exec } from "child_process";
import fs from "fs";
import path from "path";
import os from "os";

const router = express.Router();

router.post("/", (req, res) => {
  const { language, code } = req.body;

  if (!language || !code) {
    return res.status(400).json({
      success: false,
      error: "Language and code are required",
    });
  }

  const tempDir = fs.mkdtempSync(
    path.join(os.tmpdir(), "code-runner-")
  );

  let filePath;
  let command;

  try {
    if (language === "javascript") {
      filePath = path.join(tempDir, "main.js");

      fs.writeFileSync(filePath, code, "utf8");

      command = `node "${filePath}"`;
    }

    else if (language === "python") {
      filePath = path.join(tempDir, "main.py");
      fs.writeFileSync(filePath, code, "utf8");

      const pythonCommand =
        os.platform() === "win32" ? "python" : "python3";

      command = `${pythonCommand} "${filePath}"`;
  }

    else if (language === "cpp") {
    filePath = path.join(tempDir, "main.cpp");

    const exePath =
      os.platform() === "win32"
        ? path.join(tempDir, "main.exe")
        : path.join(tempDir, "main");

    fs.writeFileSync(filePath, code, "utf8");

    command = `g++ -std=c++17 "${filePath}" -o "${exePath}" && "${exePath}"`;
    }

    else {
      return res.status(400).json({
        success: false,
        error: `Unsupported language: ${language}`,
      });
    }

    exec(
      command,
      {
        timeout: 5000,
        maxBuffer: 1024 * 1024,
        windowsHide: true,
      },
      (error, stdout, stderr) => {

        // Clean temporary files
        fs.rmSync(tempDir, {
          recursive: true,
          force: true,
        });

        if (error) {
          console.log("========== CODE EXECUTION ERROR ==========");
          console.log("COMMAND:", command);
          console.log("STDOUT:", stdout);
          console.log("STDERR:", stderr);
          console.log("ERROR:", error.message);
          console.log("==========================================");

          return res.json({
            success: false,
            output: stdout,
            error: stderr || error.message,
          });
        }

        // Remove ANSI escape codes from Node output
        const cleanOutput = stdout.replace(
          /\x1B\[[0-9;]*[mK]/g,
          ""
        );

        return res.json({
          success: true,
          output: cleanOutput,
          error: stderr,
        });
      }
    );

  } catch (error) {

    fs.rmSync(tempDir, {
      recursive: true,
      force: true,
    });

    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

export default router;