var dedent = require('dedent-js')
  var str = dedent`
    diff --git file.txt file.txt
    index 83db48f..bf269f4 100644
    --- file.txt
    +++ file.txt
    @@ -1,3 +1,3 @@
     line1
    -line2
    +new line
     line3
  `
  var str = dedent`
    diff --git file.txt file.txt
    new file mode 100644
    index 0000000..dab621c
    --- /dev/null
    +++ file.txt
    @@ -0,0 +1 @@
    +foo
  `
  var str = dedent`
    diff --git file.txt file.txt
    deleted file mode 100644
    index dab621c..0000000
    --- file.txt
    +++ /dev/null
    @@ -1 +0,0 @@
    -foo
  `
  var str = dedent`
    diff --git file.txt file.txt
    old mode 100644
    new mode 100755
    index 83db48f..bf269f4
    --- file.txt
    +++ file.txt
    @@ -1,3 +1,3 @@
     line1
    -line2
    +new line
     line3
  `
  var str = dedent`
    diff --git newfile.txt newfile.txt
    new file mode 100644
    index 0000000..e69de29
  `
  var str = dedent`
    diff --git file.txt file.txt
    index 83db48f..bf269f4 100644
    --- file.txt
    +++ file.txt
    @@ -1 +1 @@
    -line1
    +line2
  `
  var str = dedent`
    diff --git file.txt file.txt
    index 83db48f..bf269f4 100644
    --- file.txt
    +++ file.txt
    @@ -1,5 +1,4 @@
     line1
    -line2
     line3
     line4
     line5
    @@ -15,4 +14,5 @@
     line6
     line7
     line8
    +line2
     line9
  `
  var str = dedent`
    diff --git file.txt file.txt
    index a999a0c..266014b 100644
    --- file.txt
    +++ file.txt
    @@ -1 +1 @@
    -line
    +line
    \ No newline at end of file
  `
  var str = dedent`
    diff --git file.txt file.txt
    index 266014b..a999a0c 100644
    --- file.txt
    +++ file.txt
    @@ -1 +1 @@
    -line
    \ No newline at end of file
    +line
  `
  var str = dedent`
    diff --git file.txt file.txt
    index 83db48f..bf269f4 100644
    --- file.txt
    +++ file.txt
    @@ -1,3 +1,3 @@
     line1
    -line2
    +
     line3
  `
  var str = dedent`
    diff --cc modified-on-both.txt
    index 5b7855c,1353022..0000000
    --- modified-on-both.txt
    +++ modified-on-both.txt
    @@@ -1,1 -1,1 +1,7 @@@
    ++<<<<<<< HEAD
     +master modification
    ++||||||| merged common ancestors
    ++text
    ++=======
    + branch modification
    ++>>>>>>> branch
    * Unmerged path removed-on-branch.txt
    * Unmerged path removed-on-master.txt
  `