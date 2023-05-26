# seres
Sino Package Manager
```
Sino's package manager

Usage: seres [+toolchain] [OPTIONS] [COMMAND]

Options:
  -V, --version             Print version info and exit
      --list                List installed commands
      --explain <CODE>      Run `sino --explain CODE`
  -v, --verbose...          Use verbose output (-vv very verbose/build.rs output)
  -q, --quiet               Do not print seres log messages
      --color <WHEN>        Coloring: auto, always, never
  -C <DIRECTORY>            Change to DIRECTORY before doing anything (nightly-only)
      --frozen              Require Seres.lock and cache are up to date
      --locked              Require Seres.lock is up to date
      --offline             Run without accessing the network
      --config <KEY=VALUE>  Override a configuration value
  -Z <FLAG>                 Unstable (nightly-only) flags to Seres, see 'seres -Z help' for details
  -h, --help                Print help

Some common seres commands are (see all commands with --list):
    build, b    Compile the current package
    check, c    Analyze the current package and report errors, but don't build object files
    clean       Remove the target directory
    doc, d      Build this package's and its dependencies' documentation
    new, n      Create a new seres package
    init        Create a new seres package in an existing directory
    add         Add dependencies to a manifest file
    remove      Remove dependencies from a manifest file
    run, r      Run a binary or example of the local package
    test, t     Run the tests
    bench       Run the benchmarks
    update      Update dependencies listed in Seres.lock
    search      Search registry for crates
    publish     Package and upload this package to the registry
    install     Install a Sino binary. Default location is $HOME/.seres/bin
    uninstall   Uninstall a Sino binary

See 'seres help <command>' for more information on a specific command.
```
