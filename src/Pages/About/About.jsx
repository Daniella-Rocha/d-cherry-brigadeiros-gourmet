import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.about_container}>
            <div className={styles.about}>
                    <img src="/ai-chef-img.jpg" alt="foto de Daniella com rosto sorridente, fundadora da D'Cherry Brigadeiros gourmet" />
                <div>
                    <p>
                        Com a visão inovadora e o amor apaixonado por doces finos, Daniella é a mente brilhante por trás da D'Cherry. Como fundadora e CEO, ela traz consigo uma paixão contagiante por criar brigadeiros gourmet que elevam a experiência do paladar a um nível extraordinário.
                    </p>
                    <p>
                        Desde jovem, cultivou uma afinidade por sabores refinados e uma apreciação pelo mundo dos doces. Sua jornada empreendedora começou quando percebeu que podia unir suas paixões por confeitaria e tecnologia. Foi ela mesma quem concebeu e desenvolveu o moderno website da D'Cherry, incorporando sua habilidade inata para unir o sabor clássico dos brigadeiros gourmet com a eficácia tecnológica.</p>
                    <p>
                        Além de seu talento empreendedor, é também uma entusiasta da inovação e está sempre buscando maneiras de aprimorar a experiência dos clientes. Seu compromisso em proporcionar momentos doces e inesquecíveis é evidente em cada detalhe dos produtos da D'Cherry.

                    </p>
                    <p>
                        Sob a liderança apaixonada de Daniella, a D'Cherry continua a conquistar corações com seus brigadeiros gourmet, estabelecendo-se como uma referência incontestável no universo dos doces finos.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default About;
