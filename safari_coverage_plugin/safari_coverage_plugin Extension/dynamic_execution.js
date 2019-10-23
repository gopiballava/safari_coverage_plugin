console.log("DYNAMIC FTW really dynamic????!!");

var coverage_data = {
    ".coveralls.yml": [[1], [2]],
    "python/bootstrap/demo/generate_test.py": [
        [3],
        [4, 5]
    ]
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function annotate_line_uncovered(filename, line_number)
{
    var line_object = document.getElementById("L"+line_number);
    line_object.nextElementSibling.style.backgroundColor = "red";

    var el = document.createElement("span");
    el.innerHTML = "test";
    insertAfter(line_object, el);
//    line_object.style.color = "red";
//    line_object.style.background_color = "green";
}

function annotate_line_covered(filename, line_number)
{
    var line_object = document.getElementById("L"+line_number);
    line_object.style.color = "green";
}

function is_pull_request()
{
    var url = window.location.href.split( '/' );
    console.log(url);
    return url[5] == "pull";
}

function is_single_file_view()
{
    // Check if we are looking at a single file in the repository
    var url = window.location.href.split( '/' );
    console.log(url);
    return url[5] == "blob";
}

function annotate_line_right_covered(filename, line_number)
{
    var line_object = document.getElementById(filename + "R" + line_number);
    console.log(line_object.nextElementSibling);
    //line_object.style.color = "red";
    line_object.nextElementSibling.style.backgroundColor = "green";
}


function annotate_line_right_uncovered(filename, line_number)
{
    var line_object = document.getElementById(filename + "R" + line_number);
    console.log(line_object.nextElementSibling);
    //line_object.style.color = "red";
    line_object.nextElementSibling.style.backgroundColor = "red";
}


function get_sha()
{
    var sha_object = document.getElementById("head_sha");
    console.log("head_sha is " + sha_object.value);
    return sha_object.value;
}


function annotate_pull_request()
{
    // We know we are in a pull request, so let's annotate it
    var x = document.getElementsByClassName("file-header");
    for (let div of x)
    {
        var filename = div.getAttribute("data-path");
        var anchor = div.getAttribute("data-anchor");
        console.log(div);
        if(coverage_data[filename])
        {
            coverage_data[filename][0].forEach(function(uncov_line_number)
                                               {
                                               annotate_line_right_covered(anchor, uncov_line_number);
                                               });
            coverage_data[filename][1].forEach(function(uncov_line_number)
                                               {
                                               annotate_line_right_uncovered(anchor, uncov_line_number);
                                               });
        }
    }
}

function annotate_single_file_view()
{
    console.log("Single file");
    annotate_line_uncovered("", 3);
}

//annotate_line_uncovered("", 6);
//annotate_line_covered("", 8);
//annotate_line_right_uncovered("", 2);
if(is_pull_request())
{
    annotate_pull_request();
}
if(is_single_file_view())
{
    annotate_single_file_view();
}
