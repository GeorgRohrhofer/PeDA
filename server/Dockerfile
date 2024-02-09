FROM python:3.8-slim-buster

WORKDIR /

COPY ./app ./

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

CMD [ "python3", "-m", "flask", "run", "--host=0.0.0.0", "--port=8000" ]
EXPOSE 8000