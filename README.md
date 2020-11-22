# tweet-for-code-review-action
A Github action that automatically tweets PRs, Commits or Repos asking for Code Reviews

## Inputs
**api-key** `required` is your Twitter Developer Credentials in the format CONSUMER_KEY;CONSUMER_SECRET;ACCESS_TOKEN;ACCESS_TOKEN_SECRET
Please enter this key in your Github Secrets

**tweet-body** is the body of the tweet

## Example usage

Copy the following into /.github/workflows/main.yml on the desired repo.
DOn't forget to set your API key from Github Secrets for the repository

```
on: [push]

jobs:
  Tweet-Repo-Job:
    runs-on: ubuntu-latest
    name: A job to tweet my repository
    steps:
      - name: Tweet repo
        uses: obasekietinosa/tweet-for-code-review-action@v1
        with:
          api-key: ${{ secrets.TWITTER_API_KEY }}
          tweet-body: I just updated my repo. Check it out and let me know what you think
```