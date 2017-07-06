#!/bin/bash

## Colours and font styles
## Syntax: echo -e "${FOREGROUND_COLOUR}${BACKGROUND_COLOUR}${STYLE}Hello world!${RESET_ALL}"

# Escape sequence and resets
ESC_SEQ="\x1b["
RESET_ALL="${ESC_SEQ}0m"
RESET_BOLD="${ESC_SEQ}21m"
RESET_UL="${ESC_SEQ}24m"

# Foreground colours
FG_BLACK="${ESC_SEQ}30;"
FG_RED="${ESC_SEQ}31;"
FG_GREEN="${ESC_SEQ}32;"
FG_YELLOW="${ESC_SEQ}33;"
FG_BLUE="${ESC_SEQ}34;"
FG_MAGENTA="${ESC_SEQ}35;"
FG_CYAN="${ESC_SEQ}36;"
FG_WHITE="${ESC_SEQ}37;"
FG_BR_BLACK="${ESC_SEQ}90;"
FG_BR_RED="${ESC_SEQ}91;"
FG_BR_GREEN="${ESC_SEQ}92;"
FG_BR_YELLOW="${ESC_SEQ}93;"
FG_BR_BLUE="${ESC_SEQ}94;"
FG_BR_MAGENTA="${ESC_SEQ}95;"
FG_BR_CYAN="${ESC_SEQ}96;"
FG_BR_WHITE="${ESC_SEQ}97;"

# Background colours (optional)
BG_BLACK="40;"
BG_RED="41;"
BG_GREEN="42;"
BG_YELLOW="43;"
BG_BLUE="44;"
BG_MAGENTA="45;"
BG_CYAN="46;"
BG_WHITE="47;"

# Font styles
FS_REG="0m"
FS_BOLD="1m"
FS_UL="4m"

# Check if AWS Installed
if [[ $(aws --version) && $? -eq 0 ]]; then
	 echo "Please install AWS CLI before proceeing futhur"
	 exit 1	
fi

# Check for AWS cli configuration
if [[ $(aws configure --profile transin list) && $? -eq 0 ]]; then
	 echo "transin AWS profile Exists"	
else
	echo "transin AWS profile Does not exist. "
fi

# Upload the file to relavant S3 bucket
echo -e "${FG_RED}${BG_BLACK}Uploading the yaml to S3 bucket${RESET_ALL}"
aws s3 cp transin-service-deployment.yaml s3://transin-staging-us-east-1-service-templates/starter-kit.yaml --profile transin
echo "Upload to S3 completed"

echo "Launching stack with details"
aws cloudformation --profile transin --region us-east-1 create-stack \
--stack-name starter-kit \
--template-url https://s3.amazonaws.com/transin-staging-us-east-1-service-templates/starter-kit.yaml \
--capabilities CAPABILITY_NAMED_IAM
echo "Launching stack complete"