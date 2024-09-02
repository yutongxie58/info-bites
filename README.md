# Info-Bites

## Description
Info-Bites is a web app designed to share and explore interesting facts across various categories. Whether you're interested in technology, history, or science, Info-Bites provides a platform to learn something new every day.

## Features
- **Explore**: Browse facts organized by categories like technology, science, and history.
- **Contribute**: Share your own interesting facts.
- **Engage**: Vote on the most interesting facts to see which ones rise to the top.

## Technologies Used
- React.js
- CSS3
- Supabase (for backend services)
- Node.js

## Quick Start
1. **Clone the repo**:
   ```bash
   git clone https://github.com/yutongxie58/info-bites.git
2. **Navigate to the project directory**:
   ```bash
   cd info-bites
3. **Install dependencies**:
   ```bash
   npm install
4. **Start the development server**:
   ```bash
   npm start
Access the app by navigating to `http://localhost:3000` in your web browser.

## Demo & Screenshots
Visit the live demo [here](https://info-bites.netlify.app/). Check out how Info-Bites looks:

<img src="https://i.postimg.cc/C1h99vW9/info-bites.png" width="800" alt="Info Bites Website Screenshot">

## NOTE
This app is currently in demo mode, which means that the data fetching from the backend (Supabase) is disabled. As a result, users will see a "There was a problem loading data" message when trying to view facts. This is intentional and meant to showcase the app's user interface and basic functionality without connecting to a live database.

### How to Enable Full Functionality

To enable full functionality, you'll need to:

1. Set up a Supabase project and obtain your `supabaseUrl` and `supabaseKey`.
2. Replace the placeholders in `supabase.js` with your actual Supabase credentials:
   ```javascript
   const supabaseUrl = "https://your-supabase-url";
   const supabaseKey = "your-supabase-key";
   const supabase = createClient(supabaseUrl, supabaseKey)
