<template>
   <!-- Intro Banner
================================================== -->
   <!-- add class "disable-gradient" to enable consistent background overlay -->
   <div class="intro-banner" :style="{ backgroundImage: 'url(' + require('@/assets/images/home-background.jpg') + ')' }">
      <div class="container">

         <!-- Intro Headline -->
         <div class="row">
            <div class="col-md-12">
               <div class="banner-headline">
                  <h3>
                     <strong>Monetize your personal data with MyDataCoin.</strong>
                     <br>
                     <span>Buy and sell anytime, anywhere.<strong class="color"> Join now!</strong> </span>
                  </h3>
               </div>
            </div>
         </div>
         <!-- Search Bar -->
         <div class="row">
            <div class="col-md-12">
               <div class="intro-banner-search-form margin-top-95">

                  <!-- Search Field -->
                  <div class="intro-search-field with-autocomplete">
                     <label for="autocomplete-input" class="field-title ripple-effect">Where?</label>
                     <div class="input-with-icon">
                        <input id="autocomplete-input" type="text" placeholder="Kazakhstan">
                        <i class="icon-material-outline-location-on"></i>
                     </div>
                  </div>

                  <!-- Search Field -->
                  <div class="intro-search-field">
                     <label for="intro-keywords" class="field-title ripple-effect">What data category you want?</label>
                     <input id="intro-keywords" type="text" placeholder="Data Category or Keywords">
                  </div>

                  <!-- Button -->
                  <div class="intro-search-button">
                     <button class="button ripple-effect"
                        onclick="window.location.href='jobs-list-layout-full-page-map.html'">Search</button>
                  </div>
               </div>
            </div>
         </div>

         <!-- Stats -->
         <div class="row">
            <div class="col-md-12">
               <ul class="intro-stats margin-top-45 hide-under-992px">
                  <li>
                     <strong class="counter">1</strong>
                     <span>Companies Joined</span>
                  </li>
                  <li>
                     <strong class="counter">1</strong>
                     <span>Data Sets Posted</span>
                  </li>
               </ul>
            </div>
         </div>

      </div>
   </div>


   <!-- Content
================================================== -->
   <!-- Category Boxes -->
   <div class="section margin-top-65">
      <div class="container">
         <div class="row">
            <div class="col-xl-12">

               <div class="section-headline centered margin-bottom-15">
                  <h3>Popular Data Categories</h3>
               </div>

               <!-- Category Boxes Container -->
               <div class="categories-container">

                  <!-- Category Box -->
                  <a href="jobs-grid-layout-full-page.html" class="category-box">
                     <div class="category-box-icon">
                        <i class="icon-material-outline-monetization-on"></i>
                     </div>
                     <div class="category-box-counter">1</div>
                     <div class="category-box-content">
                        <h3>Finances</h3>
                        <p>Investing, Stocks, Crypto / Markets & More</p>
                     </div>
                  </a>

                  <!-- Category Box -->
                  <a href="jobs-list-layout-full-page-map.html" class="category-box">
                     <div class="category-box-icon">
                        <i class="icon-line-awesome-cloud-upload"></i>
                     </div>
                     <div class="category-box-counter">113</div>
                     <div class="category-box-content">
                        <h3>Data Science & Analitycs</h3>
                        <p>Data Specialist / Scientist, Data Analyst & More</p>
                     </div>
                  </a>

                  <!-- Category Box -->
                  <a href="jobs-list-layout-full-page-map.html" class="category-box">
                     <div class="category-box-icon">
                        <i class="icon-line-awesome-suitcase"></i>
                     </div>
                     <div class="category-box-counter">186</div>
                     <div class="category-box-content">
                        <h3>Accounting & Consulting</h3>
                        <p>Auditor, Accountant, Fnancial Analyst & More</p>
                     </div>
                  </a>

                  <!-- Category Box -->
                  <a href="jobs-list-layout-1.html" class="category-box">
                     <div class="category-box-icon">
                        <i class="icon-line-awesome-pencil"></i>
                     </div>
                     <div class="category-box-counter">298</div>
                     <div class="category-box-content">
                        <h3>Writing & Translations</h3>
                        <p>Copywriter, Creative Writer, Translator & More</p>
                     </div>
                  </a>

                  <!-- Category Box -->
                  <a href="jobs-list-layout-2.html" class="category-box">
                     <div class="category-box-icon">
                        <i class="icon-line-awesome-pie-chart"></i>
                     </div>
                     <div class="category-box-counter">549</div>
                     <div class="category-box-content">
                        <h3>Sales & Marketing</h3>
                        <p>Brand Manager, Marketing Coordinator & More</p>
                     </div>
                  </a>

                  <!-- Category Box -->
                  <a href="jobs-list-layout-1.html" class="category-box">
                     <div class="category-box-icon">
                        <i class="icon-line-awesome-image"></i>
                     </div>
                     <div class="category-box-counter">873</div>
                     <div class="category-box-content">
                        <h3>Graphics & Design</h3>
                        <p>Creative Director, Web Designer & More</p>
                     </div>
                  </a>

                  <!-- Category Box -->
                  <a href="jobs-list-layout-2.html" class="category-box">
                     <div class="category-box-icon">
                        <i class="icon-line-awesome-bullhorn"></i>
                     </div>
                     <div class="category-box-counter">125</div>
                     <div class="category-box-content">
                        <h3>Digital Marketing</h3>
                        <p>Darketing Analyst, Social Profile Admin & More</p>
                     </div>
                  </a>

                  <!-- Category Box -->
                  <a href="jobs-grid-layout-full-page.html" class="category-box">
                     <div class="category-box-icon">
                        <i class="icon-line-awesome-graduation-cap"></i>
                     </div>
                     <div class="category-box-counter">445</div>
                     <div class="category-box-content">
                        <h3>Education & Training</h3>
                        <p>Advisor, Coach, Education Coordinator & More</p>
                     </div>
                  </a>

               </div>

            </div>
         </div>
      </div>
   </div>
   <!-- Category Boxes / End -->


   <!-- Features Jobs -->
   <div class="section gray margin-top-45 padding-top-65 padding-bottom-75">
      <div class="container">
         <div class="row">
            <div class="col-xl-12">

               <!-- Section Headline -->
               <div class="section-headline margin-top-0 margin-bottom-35">
                  <h3>Featured Data Sets</h3>
                  <a href="jobs-list-layout-full-page-map.html" class="headline-link">Browse All Data Sets</a>
               </div>

               <!-- Jobs Container -->
               <div class="listings-container compact-list-layout margin-top-35">

                  <!-- Job Listing -->
                  <a href="single-job-page.html" class="job-listing with-apply-button">

                     <!-- Job Listing Details -->
                     <div class="job-listing-details">

                        <!-- Logo -->
                        <div class="job-listing-company-logo">
                           <img src="../assets/images/company-logo-01.png" alt="">
                        </div>

                        <!-- Details -->
                        <div class="job-listing-description">
                           <h3 class="job-listing-title">P2P Exchange users</h3>

                           <!-- Job Listing Footer -->
                           <div class="job-listing-footer">
                              <ul>
                                 <li><i class="icon-material-outline-business"></i> Trustex <div class="verified-badge"
                                       title="Verified Employer" data-tippy-placement="top"></div>
                                 </li>
                                 <li><i class="icon-material-outline-location-on"></i> Kyrgyzstan</li>
                                 <!-- <li><i class="icon-material-outline-business-center"></i> Full Time</li> -->
                                 <li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
                              </ul>
                           </div>
                        </div>

                        <!-- Apply Button -->
                        <span class="list-apply-button ripple-effect">Buy Now</span>
                     </div>
                  </a>


                  <!-- Job Listing -->
                  <a href="single-job-page.html" class="job-listing with-apply-button">

                     <!-- Job Listing Details -->
                     <div class="job-listing-details">

                        <!-- Logo -->
                        <div class="job-listing-company-logo">
                           <img src="../assets/images/company-logo-05.png" alt="">
                        </div>

                        <!-- Details -->
                        <div class="job-listing-description">
                           <h3 class="job-listing-title">Competition Law Officer</h3>

                           <!-- Job Listing Footer -->
                           <div class="job-listing-footer">
                              <ul>
                                 <li><i class="icon-material-outline-business"></i> Laxo</li>
                                 <li><i class="icon-material-outline-location-on"></i> San Francissco</li>
                                 <li><i class="icon-material-outline-business-center"></i> Full Time</li>
                                 <li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
                              </ul>
                           </div>
                        </div>

                        <!-- Apply Button -->
                        <span class="list-apply-button ripple-effect">Buy Now</span>
                     </div>
                  </a>
                  <!-- Job Listing -->
                  <a href="single-job-page.html" class="job-listing with-apply-button">

                     <!-- Job Listing Details -->
                     <div class="job-listing-details">

                        <!-- Logo -->
                        <div class="job-listing-company-logo">
                           <img src="../assets/images/company-logo-02.png" alt="">
                        </div>

                        <!-- Details -->
                        <div class="job-listing-description">
                           <h3 class="job-listing-title">Barista and Cashier</h3>

                           <!-- Job Listing Footer -->
                           <div class="job-listing-footer">
                              <ul>
                                 <li><i class="icon-material-outline-business"></i> Coffee</li>
                                 <li><i class="icon-material-outline-location-on"></i> San Francissco</li>
                                 <li><i class="icon-material-outline-business-center"></i> Full Time</li>
                                 <li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
                              </ul>
                           </div>
                        </div>

                        <!-- Apply Button -->
                        <span class="list-apply-button ripple-effect">Buy Now</span>
                     </div>
                  </a>


                  <!-- Job Listing -->
                  <a href="single-job-page.html" class="job-listing with-apply-button">

                     <!-- Job Listing Details -->
                     <div class="job-listing-details">

                        <!-- Logo -->
                        <div class="job-listing-company-logo">
                           <img src="../assets/images/company-logo-03.png" alt="">
                        </div>

                        <!-- Details -->
                        <div class="job-listing-description">
                           <h3 class="job-listing-title">Restaurant General Manager</h3>

                           <!-- Job Listing Footer -->
                           <div class="job-listing-footer">
                              <ul>
                                 <li><i class="icon-material-outline-business"></i> King <div class="verified-badge"
                                       title="Verified Employer" data-tippy-placement="top"></div>
                                 </li>
                                 <li><i class="icon-material-outline-location-on"></i> San Francissco</li>
                                 <li><i class="icon-material-outline-business-center"></i> Full Time</li>
                                 <li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
                              </ul>
                           </div>
                        </div>

                        <!-- Apply Button -->
                        <span class="list-apply-button ripple-effect">Buy Now</span>
                     </div>
                  </a>

                  <!-- Job Listing -->
                  <a href="single-job-page.html" class="job-listing with-apply-button">

                     <!-- Job Listing Details -->
                     <div class="job-listing-details">

                        <!-- Logo -->
                        <div class="job-listing-company-logo">
                           <img src="../assets/images/company-logo-05.png" alt="">
                        </div>

                        <!-- Details -->
                        <div class="job-listing-description">
                           <h3 class="job-listing-title">International Marketing Coordinator</h3>

                           <!-- Job Listing Footer -->
                           <div class="job-listing-footer">
                              <ul>
                                 <li><i class="icon-material-outline-business"></i> Skyist</li>
                                 <li><i class="icon-material-outline-location-on"></i> San Francissco</li>
                                 <li><i class="icon-material-outline-business-center"></i> Full Time</li>
                                 <li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
                              </ul>
                           </div>
                        </div>

                        <!-- Apply Button -->
                        <span class="list-apply-button ripple-effect">Buy Now</span>
                     </div>
                  </a>

               </div>
               <!-- Jobs Container / End -->

            </div>
         </div>
      </div>
   </div>
   <!-- Featured Jobs / End -->


   <!-- Features Countries -->
   <div class="section margin-top-65 margin-bottom-65">
      <div class="container">
         <div class="row">

            <!-- Section Headline -->
            <div class="col-xl-12">
               <div class="section-headline centered margin-top-0 margin-bottom-45">
                  <h3>Featured Countries</h3>
               </div>
            </div>

            <div class="col-xl-3 col-md-6">
               <!-- Photo Box -->
               <a href="jobs-list-layout-1.html" class="photo-box"
                  :style="{ backgroundImage: 'url(' + require('@/assets/images/featured-city-01.jpg') + ')' }">
                  <div class="photo-box-content">
                     <h3>Kazakhstan</h3>
                     <span>0 Companies</span>
                  </div>
               </a>
            </div>

            <div class="col-xl-3 col-md-6">
               <!-- Photo Box -->
               <a href="jobs-list-layout-full-page-map.html" class="photo-box"
                  :style="{ backgroundImage: 'url(' + require('../assets/images/featured-city-02.jpg') + ')' }">
                  <div class="photo-box-content">
                     <h3>Kyrgyzstan</h3>
                     <span>1 Companies</span>
                  </div>
               </a>
            </div>

         </div>
      </div>
   </div>
   <!-- Features Cities / End -->


   <!-- Highest Rated Freelancers -->
   <!-- <div class="section gray padding-top-65 padding-bottom-70 full-width-carousel-fix">
  <div class="container">
     <div class="row">

        <div class="col-xl-12">
           <div class="section-headline margin-top-0 margin-bottom-25">
              <h3>Highest Rated Freelancers</h3>
              <a href="freelancers-grid-layout.html" class="headline-link">Browse All Freelancers</a>
           </div>
        </div>

        <div class="col-xl-12">
           <div class="default-slick-carousel freelancers-container freelancers-grid-layout">

              <div class="freelancer">

                 <div class="freelancer-overview">
                    <div class="freelancer-overview-inner">
                       
                       <span class="bookmark-icon"></span>
                       
                       <div class="freelancer-avatar">
                          <div class="verified-badge"></div>
                          <a href="single-freelancer-profile.html"><img src="images/user-avatar-big-01.jpg" alt=""></a>
                       </div>

                       <div class="freelancer-name">
                          <h4><a href="single-freelancer-profile.html">Tom Smith <img class="flag" src="images/flags/gb.svg" alt="" title="United Kingdom" data-tippy-placement="top"></a></h4>
                          <span>UI/UX Designer</span>
                       </div>

                       <div class="freelancer-rating">
                          <div class="star-rating" data-rating="5.0"></div>
                       </div>
                    </div>
                 </div>
                 
                 <div class="freelancer-details">
                    <div class="freelancer-details-list">
                       <ul>
                          <li>Location <strong><i class="icon-material-outline-location-on"></i> London</strong></li>
                          <li>Rate <strong>$60 / hr</strong></li>
                          <li>Job Success <strong>95%</strong></li>
                       </ul>
                    </div>
                    <a href="single-freelancer-profile.html" class="button button-sliding-icon ripple-effect">View Profile <i class="icon-material-outline-arrow-right-alt"></i></a>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </div>
</div> -->
   <!-- Highest Rated Freelancers / End-->


   <!-- Membership Plans -->
   <!-- <div class="section padding-top-60 padding-bottom-75">
  <div class="container">
     <div class="row">

        <div class="col-xl-12">
           <div class="section-headline centered margin-top-0 margin-bottom-35">
              <h3>Membership Plans</h3>
           </div>
        </div>


        <div class="col-xl-12">

           <div class="billing-cycle-radios margin-bottom-70">
              <div class="radio billed-monthly-radio">
                 <input id="radio-5" name="radio-payment-type" type="radio" checked>
                 <label for="radio-5"><span class="radio-label"></span> Billed Monthly</label>
              </div>

              <div class="radio billed-yearly-radio">
                 <input id="radio-6" name="radio-payment-type" type="radio">
                 <label for="radio-6"><span class="radio-label"></span> Billed Yearly <span class="small-label">Save 10%</span></label>
              </div>
           </div>

           <div class="pricing-plans-container">

              Plan
              <div class="pricing-plan">
                 <h3>Basic Plan</h3>
                 <p class="margin-top-10">One time fee for one listing or task highlighted in search results.</p>
                 <div class="pricing-plan-label billed-monthly-label"><strong>$19</strong>/ monthly</div>
                 <div class="pricing-plan-label billed-yearly-label"><strong>$205</strong>/ yearly</div>
                 <div class="pricing-plan-features">
                    <strong>Features of Basic Plan</strong>
                    <ul>
                       <li>1 Listing</li>
                       <li>30 Days Visibility</li>
                       <li>Highlighted in Search Results</li>
                    </ul>
                 </div>
                 <a href="pages-checkout-page.html" class="button full-width margin-top-20">Buy Now</a>
              </div>

              Plan
              <div class="pricing-plan recommended">
                 <div class="recommended-badge">Recommended</div>
                 <h3>Standard Plan</h3>
                 <p class="margin-top-10">One time fee for one listing or task highlighted in search results.</p>
                 <div class="pricing-plan-label billed-monthly-label"><strong>$49</strong>/ monthly</div>
                 <div class="pricing-plan-label billed-yearly-label"><strong>$529</strong>/ yearly</div>
                 <div class="pricing-plan-features">
                    <strong>Features of Standard Plan</strong>
                    <ul>
                       <li>5 Listings</li>
                       <li>60 Days Visibility</li>
                       <li>Highlighted in Search Results</li>
                    </ul>
                 </div>
                 <a href="pages-checkout-page.html" class="button full-width margin-top-20">Buy Now</a>
              </div>

              Plan
              <div class="pricing-plan">
                 <h3>Extended Plan</h3>
                 <p class="margin-top-10">One time fee for one listing or task highlighted in search results.</p>
                 <div class="pricing-plan-label billed-monthly-label"><strong>$99</strong>/ monthly</div>
                 <div class="pricing-plan-label billed-yearly-label"><strong>$1069</strong>/ yearly</div>
                 <div class="pricing-plan-features">
                    <strong>Features of Extended Plan</strong>
                    <ul>
                       <li>Unlimited Listings Listing</li>
                       <li>90 Days Visibility</li>
                       <li>Highlighted in Search Results</li>
                    </ul>
                 </div>
                 <a href="pages-checkout-page.html" class="button full-width margin-top-20">Buy Now</a>
              </div>
           </div>

        </div>

     </div>
  </div>
</div> -->
   <!-- Membership Plans / End-->
</template>

<script>
export default {
   name: 'AppMain',
   props: {
      msg: String
   }
}
</script>

