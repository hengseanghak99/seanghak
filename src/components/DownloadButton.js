import React from 'react';

class DownloadButton extends React.Component {
  handleDownload = () => {
    // Create a dummy anchor element
    const link = document.createElement('a');
    link.download = 'hengseanghakCV.pdf'; 
    link.href = "https://drive.google.com/uc?export=download&id=1taLhmKXrYtrexv5-JUZFvqRM0loXyj2B"; 
    link.click(); 
  };

  render() {
    return (
      <button
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
        onClick={this.handleDownload}
      >
        <span className="relative px-5 text-lg w-72 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Hire Me
        </span>
      </button>
    );
  }
}

export default DownloadButton;
