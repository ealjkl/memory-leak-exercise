# Detailed Exercise Question: Memory Leak Detection and Resolution in a Node.js User Profile Management System

_Remember you can view this in a nice format with `Ctrl` + `Shift` + `V` in Windows_

_Or from the command palette searching for:
Markdown: Open Preview_

## Background:

You are tasked with developing a simple User Profile Management System in **Node.js**. This system will allow for the creation, updating, and viewing of user profiles stored in memory. Despite the simplicity of the system, you aim to introduce a memory leak intentionally to simulate a common development oversight. Your objective is to then identify and rectify this memory leak using Node.js diagnostic tools.

### Detection and Analysis:

- Employ the **Node.js** `--inspect` flag to enable debugging and use **Chrome Developer Tools** or a similar debugger to inspect memory usage.
- Utilize heap snapshots or other profiling tools to identify the memory leak. Analyze the snapshots to understand how and where memory is being allocated unnecessarily.

### Fixing the Leak:

- Implement a solution to prevent the memory leak.
- Re-run your memory profiling to confirm that the memory leak has been resolved and document the differences observed after applying your fix.

### Documentation:

- Prepare a comprehensive report detailing your approach to introducing the memory leak, methods used for detection, analysis of the leak, and the steps taken to resolve it. Highlight the importance of memory management and efficient coding practices in preventing such leaks.
