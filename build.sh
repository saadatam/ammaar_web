#!/bin/bash

# create a new vite project with the react template

# install dependencies

if [ $# -lt 1 ]; then
  echo "Usage: enter commands: init, build, or run"
  exit 1
fi

# get the build type
build_type=$1
arg=$2


case $build_type in
    init)  
        if [ -z "$arg" ]; then
            echo "Error: 'init' requires an app name."
            echo "Usage: $0 init <appName>"
            exit 1
        fi
        echo "Initializing the project ... $arg"
        npm create vite@latest $arg --template react


        cd "$arg" || { echo "Failed to cd into $arg"; exit 1; }

        # install dependencies  
        npm install 

        # install tailwind with CSS processing packages
        # npm install -D tailwindcss postcss autoprefixer 
        # npm install -D @tailwindcss/postcss

        # initialize the tailwind configuration files
        npx tailwindcss init -p
        


        echo "|-Project initialized successfully."
        ;;
    build)  
        if [ -z "$arg" ]; then 
            echo "Error: 'build' requires an app name."
            echo "Usage: $0 build <appName>"
            exit 1
        fi

        echo "Building the project..."

        cd "$arg" || { echo "Failed to cd into $arg"; exit 1; }

        npm install -D tailwindcss postcss autoprefixer 
        npm install -D @tailwindcss/postcss        
        npm install 
        # npm install -D eslint prettier eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser

        
        npm run build
        ;;
        
    run)
        if [ -z "$arg" ]; then
            echo "Error: 'run' requires an app name."
            echo "Usage: $0 run <appName>"
            exit 1
        fi


        echo "Running the project..."
        npm --prefix "./$arg" run dev
        echo "|-Project closed"

        ;;
    # dev)
    #     echo "Developing the project..."
    #     npm run dev
    #     ;;
    *)
        echo "|-Invalid command: $build_type"
        exit 1
        ;;
esac
# 

# log status 
echo "|-Build type: $build_type successful"
