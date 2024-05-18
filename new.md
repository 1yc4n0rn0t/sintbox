<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>sintbox</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <style>
        body {
            margin: 0;
            font-family: 'Montserrat', sans-serif;
            background-color: #1a1a1a;
            color: #e0e0e0;
        }

        .navbar, .sidebar {
            background-color: #212121;
            color: white;
            padding: 10px;
            text-align: center;
        }

        .container-icon {
            font-size: 30px;
            margin-top: 5px;
        }

        .sidebar {
            height: 100%;
            width: 200px;
            position: fixed;
            padding-top: 20px;
        }

        .sidebar a {
            padding: 16px;
            text-decoration: none;
            font-size: 18px;
            color: #61afef; /* Font color for sidebar options */
            font-weight: bold; /* Boldness for sidebar options */
            display: block;
            transition: color 0.3s ease, background-color 0.3s ease;
        }

        .sidebar a:hover {
            background-color: #61afef;
            color: white;
            border-radius: 10px;
        }

        .content {
            margin-left: 250px;
            padding: 20px;
        }

        .h1 {
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
            color: #61afef; /* Font color for page titles */
        }

        #toolbar {
            margin-bottom: 10px;
        }

        #toolbar button {
            margin-right: 5px;
            background-color: #61afef;
            color: white;
            border: none;
            padding: 8px;
            cursor: pointer;
            border-radius: 15px; /* Make the toolbar options round */
            transition: background-color 0.3s ease;
        }

        #toolbar button:hover {
            background-color: #1a1a1a; /* Change the background color on hover */
        }

        #editor {
            border: 1px solid #444c56;
            padding: 10px;
            min-height: 400px;
            background-color: #2d2d2d;
            color: #e0e0e0;
            overflow-y: auto;
        }

        pre.code-block {
            background-color: #333;
            color: #e0e0e0;
            padding: 10px;
            border-radius: 5px;
            font-family: 'Courier New', Courier, monospace;
            margin: 0;
            overflow: auto;
            white-space: pre-wrap;
        }

        canvas {
            max-width: 100%;
            height: auto;
        }

        #whois-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px; /* Adjust margin as needed */
        }

        #whois-title {
            font-size: 24px; /* Adjust the font size as needed */
            margin-bottom: 10px;
        }

        #domain-input {
            width: 60%; /* Adjust the width as needed */
            padding: 8px;
            border: 2px solid #61afef; /* Use the font color of the title for the border color */
            border-radius: 15px; /* Make the search bar round */
            margin-bottom: 10px;
            transition: border-color 0.3s ease;
        }

        #domain-input:hover,
        #domain-input:focus {
            border-color: white; /* Change the border color on hover/focus */
        }

        .upload-button {
            padding: 8px 16px;
            border: 2px solid #61afef; /* Use the font color of the title for the border color */
            border-radius: 15px; /* Make the button round */
            background-color: #61afef; /* Use the font color of the title for the button color */
            color: white;
            cursor: pointer;
            transition: background-color 0.3s ease, border-color 0.3s ease;
            display: inline-block;
            margin-bottom: 10px;
        }

        .upload-button:hover {
            background-color: #1a1a1a; /* Change the button color on hover */
            border-color: white; /* Change the border color on hover */
        }

        .round-button {
            padding: 8px 16px;
            border: 2px solid #61afef; /* Use the font color of the title for the border color */
            border-radius: 15px; /* Make the button round */
            background-color: #61afef; /* Use the font color of the title for the button color */
            color: white;
            cursor: pointer;
            transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        .round-button:hover {
            background-color: #1a1a1a; /* Change the button color on hover */
            border-color: white; /* Change the border color on hover */
        }
    </style>
</head>
<body>

    <div class="navbar">
        <h1>sintbox <span class="container-icon">📦</span></h1>
    </div>

    <div class="sidebar">
        <a href="#" onclick="showContent('home')">Home</a>
        <a href="#" onclick="showContent('wiki')">Wiki</a>
        <a href="#" onclick="showContent('geolocate')">Geolocate</a>
        <a href="#" onclick="showContent('editor')">Editor</a>
        <a href="#" onclick="showContent('whois')">Whois</a>
    </div>

    <div class="content">
        <h2 class="h1">Main Content Area</h2>
        <p>This is the main content of your website.</p>
    </div>

    <div id="home" class="content" style="display:none;">
        <h2 class="h1">Home Page</h2>
        <p>Welcome to the Home Page!</p>
    </div>

    <div id="wiki" class="content" style="display:none;">
        <h2 class="h1">Wiki Page</h2>
        <ul>
            <li><strong>Geolocate:</strong> Tool for geolocation.</li>
            <li><strong>Editor:</strong> Notepad with various editing features.</li>
            <li><strong>Whois:</strong> Tool for performing WHOIS checks on domains.</li>
        </ul>
    </div>

    <div id="geolocate" class="content" style="display:none;">
        <h2 class="h1">Geolocate Page</h2>
        <div id="upload-container">
            <!-- New image upload button -->
            <label for="image-input" class="upload-button">
                <i class="fas fa-cloud-upload-alt"></i> Upload Image
            </label>
            <input type="file" accept="image/*" id="image-input" onchange="uploadImage(event)">
            <img id="image-preview" alt="Image Preview">
            <button onclick="searchSimilarLocations()" class="round-button">Search Similar Locations</button>
            <p id="location-result"></p>
        </div>
    </div>

    <div id="editor" class="content" style="display:none;">
        <h2 class="h1">Editor Page</h2>
        <div id="notepad-container">
            <div id="toolbar">
                <button onclick="toggleBold()"><i class="fas fa-bold"></i></button>
                <button onclick="toggleItalic()"><i class="fas fa-italic"></i></button>
                <button onclick="toggleUnderline()"><i class="fas fa-underline"></i></button>
                <button onclick="addBullets()"><i class="fas fa-list-ul"></i></button>
                <button onclick="addCodeBlock()"><i class="fas fa-code"></i> Code Block</button>
            </div>
            <div id="editor" contenteditable="true"></div>
        </div>
    </div>

    <div id="whois" class="content" style="display:none;">
        <div id="whois-container">
            <h2 class="h1" id="whois-title">Whois Page</h2>
            <input type="text" id="domain-input">
            <button id="check-whois" onclick="performWhoisCheck()">Check</button>
            <div id="whois-result"></div>
        </div>
    </div>

    <script>
         function showContent(pageId) {
        var contentDivs = document.getElementsByClassName('content');
        for (var i = 0; i < contentDivs.length; i++) {
            contentDivs[i].style.display = 'none';
        }

        var selectedContent = document.getElementById(pageId);
        if (selectedContent) {
            selectedContent.style.display = 'block';
        }
    }

    function addCodeBlock() {
        var editorContent = document.getElementById('editor');
        if (editorContent) {
            var codeBlock = document.createElement('pre');
            codeBlock.className = 'code-block';
            codeBlock.textContent = '\n'; // Add a newline to ensure cursor placement
            editorContent.appendChild(codeBlock);
        }
    }

    function toggleFormatting(command, value) {
        document.execCommand(command, false, value);
    }

        function addBullets() {
            document.execCommand('insertUnorderedList', false, null);
        }

        function toggleUnderline() {
            toggleFormatting('underline');
        }

        function toggleBold() {
            toggleFormatting('bold');
        }

        function toggleItalic() {
            toggleFormatting('italic');
        }
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
