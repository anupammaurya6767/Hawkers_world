const HomeImg = () => {

    return (
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 style={{ fontWeight: 700 }} class="title-font sm:text-5xl text-3xl mb-4 font-medium text-lightgray-900">Empowering your long-lived <span className="text-green-500"> Trust</span>,<br/>with Technology and Love.</h1>
            <p class="title-font text-2xl mb-8 leading-relaxed">Restoring the connection between the Vendors and Consumers in a split second.</p>
            <div class="flex w-full md:justify-start justify-center items-end">
              <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">

             </div>
              </div>
            </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="/intro.png" />
          </div>
        </div>
      </section>
    );
}

export default HomeImg;