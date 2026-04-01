from fastapi import FastAPI
import spacy

app = FastAPI()

nlp = spacy.load("en_core_web_sm")

@app.get("/")
def root():
    return {"message":"AI service running"}

@app.get("/test-nlp")
def test_nlp():
    doc = nlp("Ravi is the son of Meena")

    tokens = []

    for token in doc:
        tokens.append({
            "text": token.text,
            "pos": token.pos_
        })

    return tokens