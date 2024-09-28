## Convention

### Code Convention
- use ```kebab case``` for file and folder
- [vue style guide](https://vuejs.org/style-guide/)

### Pull Request & Commit
- Pull Request : 
 
  Format : `[NO_TICKET] : PULL_REQUEST_DESCRIPTION`
  
  Example : `[T0001] : handle login with username and password`

  If task is in progress, optional can add `WIP` in title, example :
  `[WIP][T0001] : handle login with username and password`

- Pull Request Label :

  - *WIP* : Work In Progress, indicate task in working progress
  - *need unit test* : Indicate main feature task is done, but need unit test
  - *ready to review* : Indicate that pull request is ready to review

- Commit : 

  Format : `[CATEGORY][NO_TICKET] : description of work`

  Example : 
    - `[FEATURE][T0001] : create api client service`
    - `[BUGFIX][T0001] : fix wording username validation message`
    - `[HOTFIX][T0001] : fix crash when login with google`

  Available Category :
    - *FEATURE* : indicate your commit is working on new feature
    - *BUGFIX* : indicate your commit is fixing bug
    - *HOTFIX* : indicate your commit is fixing critical bug and must be fix immediately without creating system downtimes or outages.
