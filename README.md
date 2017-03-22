# Sparky demo (1.4.1 Preview)

``` bash
yarn install
```


## Examples

* Copy all files (keep the structure)
* modify JSON
* override 1 HTML File
```
node fuse example1
```


* Copy all files (flatten everything)
* Wrap a html files in h1 tag
* override json file completely
```
node fuse example2
```


* Watch all FILES
* Copy all files (flatten everything)
* Wrap bar.html in h1 tag
* override json file completely
```
node fuse example3
```


* Execute dependencies `foo` and `bar` one after another
```
node fuse waterfall
```

* Execute dependencies `foo` and `bar` in parallel
```
node fuse parallel
```
