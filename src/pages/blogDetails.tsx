import { useEffect } from "react";

const BlogDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen  my-8 px-4 md:px-0">
      <header className="bg-emerald-500 text-white py-4 rounded-lg">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold">
            A Day in the Enchanted Forest
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center mt-2">
            <p className="text-sm mb-2 md:mb-0 md:mr-2">
              Published on August 17, 2023
            </p>
            <p className="text-sm">Category: Nature</p>
          </div>
        </div>
      </header>
      <main className=" mx-auto py-3 sm:py-6 ">
        <article className="bg-emerald-50 rounded-lg shadow p-3 sm:p-6">
          <img
            src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV4dCUyMGpzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="Enchanted Forest"
            className="w-full h-52 sm:h-60 md:h-80 rounded-lg mb-4 object-cover object-center"
          />
          <p className="text-gray-700 mb-4">
            Ah, what a marvelous day it was in the enchanted forest! The sun's
            golden rays filtered through the ancient trees, casting dancing
            shadows on the forest floor. I embarked on a quest to discover
            hidden secrets and capture the beauty of nature.
          </p>
          <p className="text-gray-700 mb-4">
            As I walked along the meandering path, the gentle rustling of leaves
            and the melodic chirping of birds greeted my ears. The air was
            filled with a sense of tranquility and magic. I stumbled upon a
            sparkling stream, its waters clear as crystal, where mystical
            creatures paused to drink.
          </p>
          <p className="text-gray-700 mb-4">
            Armed with my trusty camera, I ventured deeper into the heart of the
            forest. Vibrant wildflowers painted the landscape with their
            brilliant hues, and I couldn't resist capturing their essence
            through the lens. Every click of the shutter felt like preserving a
            fragment of nature's own enchantment.
          </p>
          <p className="text-gray-700 mb-4">
            In a secluded glade, I was granted a rare glimpse into the world of
            faerie folk. Delicate beings with gossamer wings flitted about,
            their laughter like tinkling bells. It was a magical encounter that
            left me in awe of the mystical realms that exist alongside our own.
          </p>
        </article>
      </main>
      <footer className="bg-gray-200 py-4 rounded-lg">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">
            Join me in the next chapter of my blog for more adventures!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogDetails;
