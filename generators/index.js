const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  writing() {
    this.fs.copy(this.templatePath(), this.destinationPath(), {
      globOptions: { dot: true }
    })

    const packageJson = {
      name: this.appname
    }

    this.fs.extendJSON(this.destinationPath('package.json'), packageJson)
  }

  end() {
    this.spawnCommandSync('git', ['init'])
  }
}
