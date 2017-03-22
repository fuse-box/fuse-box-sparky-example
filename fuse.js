const { Sparky } = require("fsbx");

// Copy all files (keep the structure)
// modify JSON
// override 1 HTML File
Sparky.task("example1", () => {
    return Sparky.src("files/**/**.*")
        .clean("dist/")
        .file("bar.html", file => {
            file.setContent("some content")
        })
        .file("hello.json", file => {
            file.json(json => {
                json.version++
            })
        })
        .dest("dist/")
});

// Copy all files (flatten everything)
// Wrap a html files in h1 tag
// override json file completely
Sparky.task("example2", () => {
    return Sparky.src("files/**/**.*")
        .clean("dist/")
        .file("*.html", file => {
            file.read();
            file.setContent(`<h1>${file.contents}</h1>`);
        })
        .file("hello.json", file => {
            file.json(json => {
                return { hello: "json" }
            })
        })
        .dest("dist/$name")
});

// Watch all FILES
// Copy all files (flatten everything)
// Wrap bar.html in h1 tag
// override json file completely
Sparky.task("example3", () => {
    return Sparky.watch("files/**/**.*")
        .file("bar.html", file => {
            file.read();
            file.setContent(`<h1>${file.contents}</h1>`);
        })
        .dest("dist/$name")
});

Sparky.task("foo", () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve();
        }, 1000)
    });
});

Sparky.task("bar", () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve();
        }, 1000)
    });
});

Sparky.task("waterfall", ["foo", "bar"], () => {

});
Sparky.task("parallel", ["&foo", "&bar"], () => {

});