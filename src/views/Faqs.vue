<template>
  <div class="container mx-auto">
    <div class="md:w-3/5 mx-auto">
      <header class="mb-8 md:mb-10 text-center"><h1 class="text-3xl mb-1">FAQ</h1>
        <p class="text-gray-700">Frequently asked questions</p>
        <p class="text-xs text-blue-600">点击允许展开和隐藏，当点击同一个问题的时候将切换隐藏和显示效果；并且点击只允许显示一个问答</p>
      </header>
      <div>
        <question v-for="(question, index) in questions"
                  :question="question"
                  :key="index"
                  :index="index"
                  :current-index="currentIndex"
                  :is-open="index === currentIndex"
                  @toggle="toggle"/>
      </div>
    </div>
  </div>
</template>
<script>
import Question from '@/components/Question.vue';

export default {

  components: {
    Question,
  },

  data() {
    return {
      currentIndex: 0,
      questions: [
        {
          "ask": 'What is GitHub Enterprise?',
          "answer": "GitHub Enterprise is the on-premises version of GitHub.com. It makes collaborative coding possible and enjoyable for large-scale enterprise software development teams. A full list of specs and features are detailed on our data sheet."
        },
        {
          "ask": "How is GitHub Enterprise different from GitHub.com?",
          "answer": "GitHub Enterprise includes the same great set of features as GitHub.com but packaged for running on your organization's local network. All repository data is stored on machines that you control, and access is integrated with your organization's authentication system (LDAP, SAML, or CAS)."
        },
        {
          "ask": "Can I evaluate GitHub Enterprise within my organization before purchasing?",
          "answer": "Yes. 45-day evaluation licenses are available and may be upgraded to full licenses at any time during the trial period. To get started, try GitHub for free. We'll contact you shortly after with information on downloading the software and installing trial license keys."
        },
        {
          "ask": "What hardware and software are required?",
          "answer": "GitHub Enterprise is delivered as a virtual appliance that includes all software required to get up and running. The only additional software required is a compatible virtual machine environment."
        },
        {
          "ask": "What is a Virtual Appliance?",
          "answer": "You can think of a virtual appliance as the equivalent of a network appliance that you might buy, mount in a rack, and plug into your network. The only difference is that it runs as a virtual machine inside of VMware or some other virtualization platform rather than as a physical device you mount in a rack."
        },
        {
          "ask": "Which Virtual Machine environments are supported?",
          "answer": "We currently support the following environments..."
        },
        {
          "ask": "Does GitHub Enterprise support clustering?",
          "answer": "Yes, as of GitHub Enterprise 2.5. However, clustering is designed for specific scaling situations and is not intended for every organization."
        },
        {
          "ask": "Is clustering right for my organization?",
          "answer": "Clustering provides better scalability by distributing load across multiple nodes. This horizontal scaling may be preferable for some organizations with tens of thousands of developers. However, setting up a redundant and scalable cluster can be complex and requires careful planning. This additional complexity will need to be planned for during installation, disaster recovery scenarios, and upgrades."
        },
        {
          "ask": "How do I get access to clustering?",
          "answer": "Clustering is designed for specific scaling situations and is not intended for every organization. If clustering is something you'd like to consider, please contact your dedicated representative or our account management team at sales@github.com."
        },
        {
          "ask": "Can we authenticate users with our LDAP directory or identity access management system?",
          "answer": "Yes. GitHub Enterprise supports external user authentication via LDAP, CAS, or SAML. The setup process includes a step for configuring your organization's identity management information."
        },
      ],
    }
  },

  methods: {
    toggle({currentIndex}) {
      this.currentIndex = currentIndex;
    }
  },


}
</script>
