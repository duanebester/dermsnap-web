class Footer extends HTMLElement {
    constructor() {
      super();
      this.year = new Date().getFullYear();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer class="shrink-0">
        <hr class="border-none h-[1px] mt-10 w-full bg-gray-200">
        <div class="flex flex-wrap items-start mx-auto w-full p-16 bg-gray-100">
            <div class="lg:flex-row lg:justify-between flex flex-col items-center justify-center font-normal text-gray-600"
                style="flex:1 0 100%">
                <div class="md:flex md:justify-center md:space-y-0 md:space-x-12 lg:mb-0 lg:order-2 mb-8 space-y-6 text-center">
                    <a class="block text-sm hover:opacity-[65%]" href="terms.html">Terms</a>
                    <a class="block text-sm hover:opacity-[65%]" href="#">Status</a>
                    <a class="block text-sm hover:opacity-[65%]" href="mailto:hello@dermsnap.io">Contact Us</a>
                </div>
                <div class="lg:mb-0 lg:order-3 flex gap-6 mb-12">Made with &hearts;</div>
                <div class="lg:order-1 flex items-center space-x-6 text-center">
                    <div class="text-sm text-gray-600">© ${this.year} Dermsnap</div>
                </div>
            </div>
        </div>
      </footer>
      `;
    }
  }
  
customElements.define('footer-component', Footer);