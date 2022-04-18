<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-15 18:44:58
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="detail"> </nav-bar>
    <div class="newsDet_wrap"
      ><div class="title">India's new crown vaccine "Kovacsin" approved by WHO</div
      ><div class="topbox"><span>News</span> <span class="time">04-15 14:40</span></div
      ><div class="txtbox"
        ><p
          >The World Health Organization on Wednesday approved an eighth Covid-19 vaccine. The
          vaccine, called "COVAXIN", is a traditional inactivated vaccine produced by Bharat
          Biotechnology Company of India.<br /><br />After the vaccine was approved, it was placed
          on the WHO's Emergency Use List (EUL), which means it could soon be available to millions
          of people worldwide.<br /><br />Inclusion on the WHO Emergency Use List is a process for
          assessing the quality, safety and efficacy of vaccines and a prerequisite for their
          inclusion in the global access mechanism for Covid-19 vaccines.<br /><br />Increased
          availability of vaccines<br />Once the vaccine is placed on the WHO's emergency use list,
          countries can expedite regulatory approvals for importing and administering injections.<br /><br />Mariângela
          Simão, WHO Assistant Director-General for Access to Medicines and Health Products, said:
          “Vaccines are our most effective medical tool to end the pandemic. Include this vaccine
          for emergency use. The list expands the range of vaccines that can be used."<br /><br />According
          to media reports, Kovaxine is already being used in India, although the third phase of the
          clinical trial is still underway. Indian authorities had approved its use as early as
          January. Data provided later by Bharat Biotech showed the vaccine was about 78 percent
          effective.<br /><br />Compliant with WHO standards<br />Kovacsine was assessed by a WHO
          advisory group based on a review of data on quality, safety, efficacy, risk management
          plan and protocol suitability, and procedures for inclusion in the emergency use list.<br /><br />In
          the end, Kovacsin was determined to meet the WHO's standards for protection against the
          new crown, and it was approved for global distribution.<br /><br />Last month, Kovacsin
          was also reviewed by WHO's Strategic Advisory Group of Experts on Immunization (SAGE),
          which develops specific policies and recommendations for the use of vaccines.<br /><br />The
          Strategic Advisory Group of Experts on Immunization recommends two doses of covaccin in
          all age groups over the age of 18, spaced four weeks apart.<br /><br />Simple storage
          requirements<br />The data showed that the vaccine was 78 percent effective against
          COVID-19 of any severity 14 days or more after the second dose. Due to its easy storage
          characteristics, it is ideal for use in low- and middle-income countries.<br /><br />The
          WHO said that insufficient data are available on the vaccine in pregnant women, making it
          difficult to assess its safety or efficacy in this population, although studies are being
          planned.<br /><br />The latest figures from the World Health Organization show that nearly
          247 million cases of Covid-19 have been reported globally and more than 5 million people
          have died.<br /><br />More than 3 million new infections were reported last week, showing
          a slight upward trend, the WHO said in its latest Covid-19 epidemiology report on
          Tuesday.<br /><br />The 6% weekly increase in new cases in Europe was the main contributor
          to the overall increase, as all other regions reported declining or stable trends.</p
        ></div
      ></div
    >
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'
  export default {
    name: 'HomeNewsdetail',
    components: {
      NavBar,
    },
    data() {
      return {}
    },
  }
</script>

<style lang="scss" scoped>
  .app-container {
    background: #0a0a0a;
    color: #fff;
    padding-top: 46px;
    .newsDet_wrap {
      padding: 0 4%;
      font-size: 0.9rem;
      .title {
        font-size: 1.1rem;
        padding: 0.8rem 0;
      }
      .topbox {
        color: #c6c6c6;
        font-size: 0.95rem;
      }
      .txtbox {
        padding: 1rem 0;
        p {
          word-break: break-all;
          line-height: 1.5rem;
          padding-bottom: 0.8rem;
        }
      }
    }
  }
</style>
