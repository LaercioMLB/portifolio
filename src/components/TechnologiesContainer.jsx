import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiAws,
  DiMysql,
  DiReact,
} from "react-icons/di";

import {
  FaAws,
  FaDigitalOcean,
  FaDocker
} from "react-icons/fa";

import{
  SiAzuredevops,
  SiKubernetes,
  SiPrometheus
} from "react-icons/si"

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "AWS", icon: <FaAws />, 
  text: "Os serviços que trabalho na AWS: Lambda, S3 Bucket, Elastic Beanstalk, CloudWatch, EC2 e OpenShift" },
  { id: "css", name: "Azure", icon: <SiAzuredevops />,
  text: "Trabalhando com Azure Devops, motando Pipelines CI/CD" },
  { id: "css", name: "Digital Ocean", icon: <FaDigitalOcean />,
  text: "Usando muito para laboratório de testes para criar pipelines, mexendo também com kubernetes e docker" },
  { id: "css", name: "Kubernetes", icon: <SiKubernetes />,
  text: "Trabalhando com microsserviços escalando aplicações, diretamente com replicaset" },
  { id: "css", name: "Docker", icon: <FaDocker />,
  text: "Junto com kubernetes, 'conteinerizando' e organizando microsserviços" },
  { id: "html", name: "Prometheus", icon: <SiPrometheus />, 
  text: "Conseguindo capturar logs e organizando junto com a plataforma Grafana, para resolução dos problemas da aplicação" },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
