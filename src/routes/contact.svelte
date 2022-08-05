
<script>
    import { Grid,Column,Row,Button,Accordion, AccordionItem } from 'carbon-components-svelte'
    import "carbon-components-svelte/css/g100.css";
         
	let img = 'src/images/5friends.svg';

  
</script>


<Grid>
    <img src={img} height="300px" alt="ima">
    <Row>
        <Column>
            <Accordion>
                <AccordionItem title="Natural Language Classifier">
                  <p>
                    Natural Language Classifier uses advanced natural language processing and
                    machine learning techniques to create custom classification models. Users
                    train their data and the service predicts the appropriate category for the
                    inputted text.
                  </p>
                </AccordionItem>
                <AccordionItem title="Natural Language Understanding">
                  <p>
                    Analyze text to extract meta-data from content such as concepts, entities,
                    emotion, relations, sentiment and more.
                  </p>
                </AccordionItem>
                <AccordionItem title="Language Translator">
                  <p>
                    Translate text, documents, and websites from one language to another.
                    Create industry or region-specific translations via the service's
                    customization capability.
                  </p>
                </AccordionItem>
                <AccordionItem title="Language Translator">
                    <p>
                      Translate text, documents, and websites from one language to another.
                      Create industry or region-specific translations via the service's
                      customization capability.
                    </p>
                  </AccordionItem>
                  <AccordionItem title="Language Translator">
                    <p>
                      Translate text, documents, and websites from one language to another.
                      Create industry or region-specific translations via the service's
                      customization capability.
                    </p>
                  </AccordionItem>
                  <AccordionItem title="Language Translator">
                    <p>
                      Translate text, documents, and websites from one language to another.
                      Create industry or region-specific translations via the service's
                      customization capability.
                    </p>
                  </AccordionItem>
              </Accordion>
        </Column>
        <Column>

<h1> hello from contact</h1>
<Button> mira ddquien llego el capi capi del barco</Button>
<a href="/">home</a>
        </Column>
    </Row>
</Grid>

    





