FROM openjdk:11-jdk
#ARG JAR_FILE="build/libs/simple-*.jar"
COPY build/libs/*.jar app.jar/
ENTRYPOINT ["java", "-jar","/app.jar"]
