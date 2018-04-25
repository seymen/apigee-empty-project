```sh
cd projects
git clone https://github.com/seymen/apigee-empty-project.git new-project-name
rm -rf .git
vi, search for "empty" and replace with the new project name
mvn install -Ptest
```
