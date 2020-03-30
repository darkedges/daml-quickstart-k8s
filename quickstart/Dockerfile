FROM daml/sdk:0.13.55

COPY docker-entrypoint.sh /usr/bin
COPY accessToken /home/daml

RUN daml new quickstart quickstart-java && \
    cd quickstart && \
    daml build

ENTRYPOINT  ["/usr/bin/docker-entrypoint.sh"]
CMD ["/bin/bash"]
