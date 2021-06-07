# Executive Summary

    $ git push -d <remote_name> <branch_name>
    $ git branch -d <branch_name>

Note that in most cases the remote name is `origin`.
In such a case you'll have to use the command like so.

    $ git push -d origin <branch_name>

# Delete Local Branch

To delete the _local_ branch use one of the following:

    $ git branch -d branch_name
    $ git branch -D branch_name

**Note:** The `-d` option is an alias for `--delete`, which only deletes the branch if it has already been fully merged in its upstream branch. You could also use `-D`, which is an alias for `--delete --force`, which deletes the branch "irrespective of its merged status." [Source: `man git-branch`]

# Delete Remote Branch

As of [Git v1.7.0][git-1.7.0], you can delete a **_remote_** branch using

    $ git push <remote_name> --delete <branch_name>

which might be easier to remember than

    $ git push <remote_name> :<branch_name>

which was added in [Git v1.5.0][git-1.5.0] "to delete a remote branch or a tag."

Starting on [Git v2.8.0][git-2.8.0] you can also use `git push` with the `-d` option as an alias for `--delete`.

Therefore, the version of Git you have installed will dictate whether you need to use the easier or harder syntax.

## Delete Remote Branch

From Chapter 3 of [_Pro Git_][#progit] by Scott Chacon:

> ### Deleting Remote Branches
>
> Suppose you’re done with a remote branch — say, you and your collaborators are finished with a feature and have merged it into your remote’s master branch (or whatever branch your stable code-line is in). You can delete a remote branch using the rather obtuse syntax `git push [remotename] :[branch]`. If you want to delete your server-fix branch from the server, you run the following:

    $ git push origin :serverfix
    To git@github.com:schacon/simplegit.git
     - [deleted]         serverfix

> Boom. No more branches on your server. You may want to dog-ear this page, because you’ll need that command, and you’ll likely forget the syntax. A way to remember this command is by recalling the `git push [remotename] [localbranch]:[remotebranch]` syntax that we went over a bit earlier. If you leave off the `[localbranch]` portion, then you’re basically saying, “Take nothing on my side and make it be `[remotebranch]`.”

I issued `git push origin: bugfix` and it worked beautifully. Scott Chacon was right—I will want to [dog ear][1] that page (or virtually dog ear by answering this on Stack&nbsp;Overflow).

[#progit]: http://git-scm.com/book/en/Git-Branching-Remote-Branches
[git-2.8.0]: https://github.com/git/git/blob/master/Documentation/RelNotes/2.8.0.txt
[git-1.7.0]: https://github.com/gitster/git/blob/master/Documentation/RelNotes/1.7.0.txt
[git-1.5.0]: https://github.com/gitster/git/blob/master/Documentation/RelNotes/1.5.0.txt
[1]: http://en.wiktionary.org/wiki/dogear#Verb

Then you should execute this on other machines

    # Fetch changes from all remotes and locally delete
    # remote deleted branches/tags etc
    # --prune will do the job :-;
    git fetch --all --prune

to propagate changes.
