import React from 'react'

const Contact = () => {
  return (
    <div>
      <footer class="bg-gray-800 text-gray-300 py-12 rounded">
    <div class="container mx-auto flex flex-wrap justify-between">
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
            <h2 class="text-lg font-semibold mb-4">Get Cooking</h2>
            <p>Discover thousands of mouthwatering recipes from around the world. Whether you're a seasoned chef or a kitchen newbie, there's something for everyone!</p>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
            <h2 class="text-lg font-semibold mb-4">Stay Connected</h2>
            <p>Join our community of food lovers on social media. Share your creations, get inspired, and connect with fellow foodies.</p>
            <div class="mt-4">
                
            </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
            <h2 class="text-lg font-semibold mb-4">Newsletter</h2>
            <p>Subscribe to our newsletter for the latest recipes, cooking tips, and exclusive offers delivered straight to your inbox.</p>
            <form class="mt-4">
                <input type="email" placeholder="Your Email Address" class="bg-gray-700 text-gray-300 py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
                <button type="submit" class="bg-yellow-500 text-gray-900 py-2 px-6 rounded-full mt-2 hover:bg-yellow-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500">Subscribe</button>
            </form>
        </div>
    </div>
    <div class="text-center mt-8">
        <p>&copy; 2024 Recipes. All rights reserved.</p>
    </div>
</footer>

    </div>
  )
}

export default Contact