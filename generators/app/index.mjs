import Generator from 'yeoman-generator'
import Case from 'case';

export default class extends Generator {
    async getherConfig() {
        this.answers = await this.prompt([
            {
                name: 'appName',
                message: 'Package name',
                default: Case.kebab(this.appname),
                type: 'input'
            },
            {
                name: 'license',
                message: 'License name',
                default: 'UNLICENSED',
                type: 'input'
            }
        ])

        this.answers.pkgName = Case.kebab(this.answers.appName);
    }

    async generate() {
        this.addDependencies
        this.fs.copyTpl(
            this.templatePath('package.json.template'),
            this.destinationPath('package.json'),
            this.answers
        );
        [
            'src/index.ts',
            'src/config.ts',
            'src/logger.ts',
            'test/index.test.ts',
            'test/test-event.json',
            '.editorconfig',
            '.eslintrc.js',
            '.prettierrc.json',
            'jest.config.ts',
            'tsconfig.json',
        ].forEach(file => this.fs.copy(this.templatePath(file), this.destinationPath(file)));

        // Git ignore can't be added to repo, with dot name, as it will be
        // processed by Git configuration, so in template dot replaced with underscore
        this.fs.copy(this.templatePath('_gitignore'), this.destinationPath('.gitignore'));
    }
}
