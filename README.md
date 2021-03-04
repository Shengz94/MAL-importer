# MAL Importer
[Web-app link](https://shengz94.github.io/MAL-Importer/)

## Description
This app imports a list of animes to your MAL account's list.

For now it only imports animes and their status.

It's splitted into 4 main views.

### Login
This view is composed by only one button that redirects you to MAL page to log in.

When you log in sucssesfully, the MAL page will redirects you to this web app again.

### Home
Here you have to upload a text (txt) file with the animes you want to import to MAL.

The format of the txt file should be one anime per line.

### Anime management
In this view you have to choose which anime you want to import to MAL and which match.

If the app couldn't find any anime that match the anime from the text file, it will show it and the checkbox will be disabled.

### Result
In this last view you can check which anime from the text file was imported and the match information from MAL (included a picture and a link to the match).

### Top Bar
Besides the 4 main views, each view contains a top bar that includes:
* Logo of MAL (redirects to the Trakt website).
* Web-app's name.
* Logo of Github (redirects to my github's profile).
* User info (User name and avatar) (redirects to user's profile in MAL).
* Log out button.

# Disclaimer
* This app is not 100% tested, so it can corrupt your MAL account's list. **Use it at your own risk, I'm not responsible for any damage caused to your account's list.**
