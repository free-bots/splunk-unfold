# splunk-unfold

Transform your exported splunk logs into valid json files.

## Installation
Download the latest [release](https://github.com/free-bots/splunk-unfold/releases). Than go to the extension overview (`ctrl+shift+x`) and click on the three dots. Click on `Install from VSIX` and open the last release .vsix file.

![install](https://user-images.githubusercontent.com/54210595/220431361-24f0ac14-1811-4c80-bf4d-511233e3e7c0.png)

## Usage 
Open your splunk log export json file, run Show All Commands (`ctrl+shift+p`) and select `Unfold Splunk logs`:

![promt1](https://user-images.githubusercontent.com/54210595/220431709-a4cb6140-ad7f-413b-8779-a42a973ebecb.png)

If you have multiple formatters installed, you will be asked to select your preferred one and the transformation is done:

![promt2](https://user-images.githubusercontent.com/54210595/220431892-e5c55840-fb0e-4694-a918-f36962cae251.png)

Otherwise you have to format the document yourself after the transformation (`shift+alt+f`).

## Build from source
```bash
git clone https://github.com/free-bots/splunk-unfold.git
cd splunk-unfold
npm i
npm run package:vsix
```
