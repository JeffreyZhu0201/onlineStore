package com.jeffrey.onlinestorebe.utils;

import org.apache.http.NameValuePair;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class HttpClientUtil {
    private static final Logger logger = LoggerFactory.getLogger(HttpClientUtil.class);
    private static final int TIMEOUT_MSEC = 5 * 1000;
    public static String doGet(String url, Map<String, String> paramMap) {
        String result = "";
        CloseableHttpClient httpClient = HttpClients.createDefault();
        CloseableHttpResponse response = null;
        try {
            URIBuilder builder = new URIBuilder(url);
            if (paramMap != null) {
                for (Map.Entry<String, String> entry : paramMap.entrySet()) {
                    builder.addParameter(entry.getKey(), entry.getValue());
                }
            }
            URI uri = builder.build();
            HttpGet httpGet = new HttpGet(uri);
            httpGet.setConfig(buildRequestConfig());
            response = httpClient.execute(httpGet);
            logger.info("GET Response status: {}", response.getStatusLine().getStatusCode());
            if (response.getStatusLine().getStatusCode() == 200) {
                result = EntityUtils.toString(response.getEntity(), StandardCharsets.UTF_8);
                logger.debug("GET Response body: {}", result);
            }
        } catch (Exception e) {
            logger.error("Error occurred while sending GET request", e);
        } finally {
            closeResources(response, httpClient);
        }
        return result;
    }
    public static String doPost(String url, Map<String, String> paramMap) {
        String resultString = "";
        CloseableHttpClient httpClient = HttpClients.createDefault();
        CloseableHttpResponse response = null;
        try {
            HttpPost httpPost = new HttpPost(url);
            if (paramMap != null) {
                List<NameValuePair> paramList = new ArrayList<>();
                for (Map.Entry<String, String> param : paramMap.entrySet()) {
                    paramList.add(new BasicNameValuePair(param.getKey(), param.getValue()));
                }
                UrlEncodedFormEntity entity = new UrlEncodedFormEntity(paramList, StandardCharsets.UTF_8);
                httpPost.setEntity(entity);
            }
            httpPost.setConfig(buildRequestConfig());
            response = httpClient.execute(httpPost);
            logger.info("POST Response status: {}", response.getStatusLine().getStatusCode());
            resultString = EntityUtils.toString(response.getEntity(), StandardCharsets.UTF_8);
            logger.debug("POST Response body: {}", resultString);
        } catch (Exception e) {
            logger.error("Error occurred while sending POST request", e);
        } finally {
            closeResources(response, httpClient);
        }
        return resultString;
    }
    public static RequestConfig buildRequestConfig() {
        return RequestConfig.custom()
                .setConnectTimeout(TIMEOUT_MSEC)
                .setConnectionRequestTimeout(TIMEOUT_MSEC)
                .setSocketTimeout(TIMEOUT_MSEC)
                .build();
    }
    private static void closeResources(CloseableHttpResponse response, CloseableHttpClient httpClient) {
        try {
            if (response != null) {
                response.close();
            }
            if (httpClient != null) {
                httpClient.close();
            }
        } catch (IOException e) {
            logger.error("Error occurred while closing resources", e);
        }
    }
}