To run the project and preview the webpage in the browser,
first cd to the project directory, then use:
bundle exec jekyll serve
and go to the given url.

To rebuild the project with jekyll use:
bundle exec jekyll build

If the live version is not up to date, force reload the webpage:
ctrl + shift + r

If the assets aren't loading for the locally hosted version, try cleaning and restarting the server:
bundle exec jekyll clean
bundle exec jekyll build
