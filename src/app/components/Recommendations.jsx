

import React from "react";

const Recommendations = () => {
  return (
    <section id="recommendations" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Professional Recommendations
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Excellence */}
          <div className="group">
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl transition-all duration-300 
                          hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-700
                          border border-gray-700">
              <div className="space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed">
                  "Vejaysuriyaa consistently impressed me with his dedication and performance in coursework, especially his A+ in the FPGA-based embedded systems course during his 7th semester. He has demonstrated strong problem-solving skills and a passion for technology."
                </p>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-white font-semibold">Dr. R. Mohanbabu</p>
                  <p className="text-gray-400">Professor, Department of Electronics and Communication Engineering</p>
                </div>
              </div>
            </div>
          </div>

          {/* NSS Leadership */}
          <div className="group">
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl transition-all duration-300 
                          hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-700
                          border border-gray-700">
              <div className="space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed">
                  "As NSS Coordinator, Vejaysuriyaa led initiatives like dental camps and awareness rallies. His compassion and drive to make a difference were also evident in his work with the 'GoGet' project, which aimed to alleviate community struggles."
                </p>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-white font-semibold">Mr. S.D. Kumar</p>
                  <p className="text-gray-400">Assistant Professor, Department of Mechanical Engineering</p>
                  <p className="text-gray-400">Coordinator, NSS (National Service Scheme)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Excellence */}
          <div className="group">
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl transition-all duration-300 
                          hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-700
                          border border-gray-700">
              <div className="space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed">
                  "During the 'GoGet' and 'Food Wastage Reduction' projects, Vejaysuriyaa's front-end development skills played a key role in their success, both of which received O grades. His eagerness to learn and his ability to execute with precision make him an exceptional student."
                </p>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-white font-semibold">Dr. D. Manoj Kumar</p>
                  <p className="text-gray-400">Assistant Professor, Department of Electronics and Communication Engineering</p>
                  <p className="text-gray-400">Project Coordinator</p>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Versatility */}
          <div className="group">
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl transition-all duration-300 
                          hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-700
                          border border-gray-700">
              <div className="space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed">
                  "Vejaysuriyaa was a co-author on the 'Food Wastage Reduction App' and one of the key contributors. As his class in-charge, I found him to be a versatile student, demonstrating a strong ability to learn and excel in a variety of technical areas. He truly lives up to the description of being a 'jack of all trades.'"
                </p>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-white font-semibold">Dr. R. Arthi</p>
                  <p className="text-gray-400">Associate Professor, Department of Electronics and Communication Engineering</p>
                </div>
              </div>
            </div>
          </div>

          {/* Photography Leadership */}
          <div className="group md:col-span-2 max-w-2xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl transition-all duration-300 
                          hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-700
                          border border-gray-700">
              <div className="space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed">
                  "Vejaysuriyaa was the head of our photography club in his final year, showing exceptional leadership and creativity. His technical expertise in photography, along with his proficiency in editing software, made him a standout member."
                </p>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-white font-semibold">Mr. Aravindhan</p>
                  <p className="text-gray-400">Assistant Professor, Department of Electronics and Communication Engineering</p>
                  <p className="text-gray-400">Coordinator, Photography Club</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
