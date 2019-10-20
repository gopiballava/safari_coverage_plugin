console.log("DYNAMIC FTW really dynamic????!!");

var coverage_data = {
    ".coveralls.yml": [[], [1, 2]],
    "python/bootstrap/demo/generate_test.py": [
        [3],
        [4, 5]
    ]
}

function determine_filename()
{
    return window.location.href;
}

function annotate_line_uncovered(filename, line_number)
{
    var line_object = document.getElementById("L"+line_number);
    line_object.style.color = "red";
    line_object.style.background_color = "green";
}

function annotate_line_covered(filename, line_number)
{
    var line_object = document.getElementById("L"+line_number);
    line_object.style.color = "green";
}

function is_repo_file_view()
{
    // Determine if this is a view of a single file in the repo
}

function annotate_line_right_covered(filename, line_number)
{
    //    var line_object = document.getElementById("diff-609cbb49f261fa40dd49d76320116710R"+line_number);
    var line_object = document.getElementById(filename + "R" + line_number);
    console.log(line_object.nextElementSibling);
    //line_object.style.color = "red";
    line_object.nextElementSibling.style.backgroundColor = "green";
}


function annotate_line_right_uncovered(filename, line_number)
{
//    var line_object = document.getElementById("diff-609cbb49f261fa40dd49d76320116710R"+line_number);
    var line_object = document.getElementById(filename + "R" + line_number);
    console.log(line_object.nextElementSibling);
    //line_object.style.color = "red";
    line_object.nextElementSibling.style.backgroundColor = "red";
}

function find_file_headers()
{
    var x = document.getElementsByClassName("file-header");
    var i;
    for (i = 0; i < x.length; i++)
    {
        console.log("Index " + i);
        console.log(x[i].getAttribute("class"));
        console.log(x[i].getAttribute("data-path"));
        console.log(x[i].getAttribute("data-anchor"));
        var filename = x[i].getAttribute("data-path");
        var anchor = x[i].getAttribute("data-anchor");
        //console.log(coverage_data[filename][1]);
        if(coverage_data[filename])
        {
            coverage_data[filename][0].forEach(function(uncov_line_number)
                                               {
                                               annotate_line_right_covered(anchor, uncov_line_number);
                                               });
            coverage_data[filename][1].forEach(function(uncov_line_number)
                                               {
                                               console.log("Not cov " + uncov_line_number);
                                               annotate_line_right_uncovered(anchor, uncov_line_number);
                                               });
        }
//        annotate_line_right_uncovered(x[i].getAttribute("data-anchor"), 1);

        
        //        console.log(x[i]["data_path"]);
//        console.log(Object.getOwnPropertyNames(x[i]));
//        console.log(x[i].hasOwnProperty("data-path"));
//        console.log(x[i].dataanchor);
    //    x[i].style.backgroundColor = "red";
    }
}
console.log("Our URL is " + determine_filename());
//annotate_line_uncovered("", 6);
//annotate_line_covered("", 8);
//annotate_line_right_uncovered("", 2);
find_file_headers();
