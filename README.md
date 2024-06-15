# B3 Testnet Bot

![GitHub repo size](https://img.shields.io/github/repo-size/dante4rt/b3-testnet-bot)
![GitHub](https://img.shields.io/github/license/dante4rt/b3-testnet-bot)

B3 Incentivized Testnet BOT for claiming $PEWPEW rewards. This bot automates the process of claiming rewards using provided accounts and cookies.

## Getting Started

### Prerequisites

Before running the bot, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dante4rt/b3-testnet-bot.git
   ```

2. Navigate into the project directory:

   ```bash
   cd b3-testnet-bot
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Setting Up Cookies

To use the B3 Testnet Bot, you need to obtain cookies from the [B3 Testnet website](https://join.b3.fun/) and add them to the `accounts.json` file.

#### Steps to Obtain Cookies:

1. **Visit the B3 Testnet Website**: Go to [https://join.b3.fun/](https://join.b3.fun/) in your browser.

2. **Login and Obtain Cookies**:
   - Login with your credentials.
   - Open Developer Tools in your browser (usually `F12` or `Cmd+Option+I` on macOS).
   - Go to the "Network" tab.
   - Refresh the page.
   - Look for a request to `https://join.b3.fun/` in the network log.
   - Copy the entire value of the `Cookie` header from this request.

3. **Add Cookies to `accounts.json`**:
   - Open `accounts.json` file in the project directory.
   - Add your cookie data as an array of strings, each representing a cookie value.
   - Example format in `accounts.json`:
     ```json
     [
       "cookie_value_1",
       "cookie_value_2",
       "cookie_value_3"
     ]
     ```

### Usage

1. **Run the Bot**:

   ```bash
   npm start
   ```

2. **Follow the Prompt**:

   - Enter the number of clicks you want to perform.
   - The bot will automatically claim rewards using the provided cookies and accounts.

### Contributing

Contributions are welcome! If you have suggestions, feature requests, or find any issues, please create an issue or submit a pull request.