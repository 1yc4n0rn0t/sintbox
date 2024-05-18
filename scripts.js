function uploadImage(event) {
         var input = event.target;
         var reader = new FileReader();

         reader.onload = function () {
             var img = document.getElementById('image-preview');
            img.src = reader.result;
     };

        reader.readAsDataURL(input.files[0]);
    }
        function searchSimilarImages() {
            // Your searchSimilarImages function code
        }

        function displaySimilarImages(images) {
            // Your displaySimilarImages function code
        }

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

        function toggleFormatting(command, value) {
            document.execCommand(command, false, value);
        }

        function addCodeBlock() {
            var editorContent = document.getElementById('editor');
            if (editorContent) {
                var codeBlock = document.createElement('pre');
                codeBlock.className = 'code-block';

                var codeContent = document.createElement('code');
                codeContent.contentEditable = true;
                codeBlock.appendChild(codeContent);

                // Add a newline to ensure cursor placement
                codeContent.appendChild(document.createTextNode('\n'));

                editorContent.appendChild(codeBlock);
            }
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

        // Function to search similar images using Google Custom Search API
       // Function to fetch the Custom Search Engine ID
       function fetchCustomSearchEngineId() {
            // Make an API call or use any method to retrieve the Custom Search Engine ID dynamically
            // For example, you can fetch it from your server or use a configuration file
            return 'YOUR_DYNAMICALLY_FETCHED_CSE_ID';
        }

        // Function to initialize the Google Custom Search Engine
        function initializeCustomSearchEngine() {
            var apiKey = 'AIzaSyDghZxOt2O9-OglomET_zBUFy6AXaqZYZ8';
            var cx = fetchCustomSearchEngineId();

            if (!apiKey || !cx) {
                alert('Please provide the necessary information.');
                return;
            }

            var apiUrl = `https://www.googleapis.com/customsearch/v1?q=test&key=${apiKey}&cx=${cx}&searchType=image`;

            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    // Process the data as needed
                    console.log('Data:', data);
                })
                .catch(error => console.error('Error:', error));
        }


        // Initialize the Custom Search Engine when the page loads
        console.log(apiKey)
        var apiUrl = `https://www.googleapis.com/customsearch/v1?q=test&key=${apiKey}&cx=${cx}&searchType=image`;
    </script>

    <!-- Your existing scripts -->

    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
