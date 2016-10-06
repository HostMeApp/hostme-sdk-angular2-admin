/**
 * Qa admin api
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: admin
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH }                                         from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class AdminWebHookManagementApi {
    protected basePath = 'http://hostme-services-qa.azurewebsites.net';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * 
     * 
     * @param id 
     */
    public _delete(id: string, extraHttpRequestParams?: any): Observable<any> {
        return this._deleteWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * 
     */
    public deleteAll(extraHttpRequestParams?: any): Observable<any> {
        return this.deleteAllWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * 
     */
    public get(extraHttpRequestParams?: any): Observable<Array<models.WebHookFilter>> {
        return this.getWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * 
     */
    public get_1(extraHttpRequestParams?: any): Observable<Array<models.WebHook>> {
        return this.get_1WithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * 
     * @param id 
     */
    public lookup(id: string, extraHttpRequestParams?: any): Observable<models.WebHook> {
        return this.lookupWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * 
     * @param webHook 
     */
    public post(webHook: models.WebHook, extraHttpRequestParams?: any): Observable<models.WebHook> {
        return this.postWithHttpInfo(webHook, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * 
     * @param id 
     * @param webHook 
     */
    public put(id: string, webHook: models.WebHook, extraHttpRequestParams?: any): Observable<any> {
        return this.putWithHttpInfo(id, webHook, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * 
     * 
     * @param id 
     */
    public _deleteWithHttpInfo(id: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/webhooks/registrations/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'text/json', 
            'application/xml', 
            'text/xml'
        ];
        
        // authentication (oauth2) required
        // oauth required
        if (this.configuration.accessToken)
        {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters,
            responseType: ResponseContentType.Json
        });

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * 
     */
    public deleteAllWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/webhooks/registrations`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845


        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'text/json', 
            'application/xml', 
            'text/xml'
        ];
        
        // authentication (oauth2) required
        // oauth required
        if (this.configuration.accessToken)
        {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters,
            responseType: ResponseContentType.Json
        });

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * 
     */
    public getWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/webhooks/filters`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845


        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'text/json', 
            'application/xml', 
            'text/xml'
        ];
        
        // authentication (oauth2) required
        // oauth required
        if (this.configuration.accessToken)
        {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            responseType: ResponseContentType.Json
        });

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * 
     */
    public get_1WithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/webhooks/registrations`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845


        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'text/json', 
            'application/xml', 
            'text/xml'
        ];
        
        // authentication (oauth2) required
        // oauth required
        if (this.configuration.accessToken)
        {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            responseType: ResponseContentType.Json
        });

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * 
     * @param id 
     */
    public lookupWithHttpInfo(id: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/webhooks/registrations/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling lookup.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'text/json', 
            'application/xml', 
            'text/xml'
        ];
        
        // authentication (oauth2) required
        // oauth required
        if (this.configuration.accessToken)
        {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            responseType: ResponseContentType.Json
        });

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * 
     * @param webHook 
     */
    public postWithHttpInfo(webHook: models.WebHook, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/webhooks/registrations`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'webHook' is not null or undefined
        if (webHook === null || webHook === undefined) {
            throw new Error('Required parameter webHook was null or undefined when calling post.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json', 
            'text/json', 
            'application/xml', 
            'text/xml', 
            'application/x-www-form-urlencoded', 
            'image/jpg', 
            'image/jpeg', 
            'image/png'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'text/json', 
            'application/xml', 
            'text/xml'
        ];
        
        // authentication (oauth2) required
        // oauth required
        if (this.configuration.accessToken)
        {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: webHook == null ? '' : JSON.stringify(webHook), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            responseType: ResponseContentType.Json
        });

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * 
     * @param id 
     * @param webHook 
     */
    public putWithHttpInfo(id: string, webHook: models.WebHook, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/webhooks/registrations/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling put.');
        }
        // verify required parameter 'webHook' is not null or undefined
        if (webHook === null || webHook === undefined) {
            throw new Error('Required parameter webHook was null or undefined when calling put.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json', 
            'text/json', 
            'application/xml', 
            'text/xml', 
            'application/x-www-form-urlencoded', 
            'image/jpg', 
            'image/jpeg', 
            'image/png'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            'text/json', 
            'application/xml', 
            'text/xml'
        ];
        
        // authentication (oauth2) required
        // oauth required
        if (this.configuration.accessToken)
        {
            headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
        }
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: webHook == null ? '' : JSON.stringify(webHook), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            responseType: ResponseContentType.Json
        });

        return this.http.request(path, requestOptions);
    }

}