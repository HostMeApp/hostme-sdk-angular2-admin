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

import * as models from './models';

export interface SingleValueNode {
    typeReference?: models.IEdmTypeReference;

    kind?: SingleValueNode.KindEnum;

}
export namespace SingleValueNode {
    export enum KindEnum {
        None = <any> 'None',
        Constant = <any> 'Constant',
        Convert = <any> 'Convert',
        NonentityRangeVariableReference = <any> 'NonentityRangeVariableReference',
        BinaryOperator = <any> 'BinaryOperator',
        UnaryOperator = <any> 'UnaryOperator',
        SingleValuePropertyAccess = <any> 'SingleValuePropertyAccess',
        CollectionPropertyAccess = <any> 'CollectionPropertyAccess',
        SingleValueFunctionCall = <any> 'SingleValueFunctionCall',
        Any = <any> 'Any',
        CollectionNavigationNode = <any> 'CollectionNavigationNode',
        SingleNavigationNode = <any> 'SingleNavigationNode',
        SingleValueOpenPropertyAccess = <any> 'SingleValueOpenPropertyAccess',
        SingleEntityCast = <any> 'SingleEntityCast',
        All = <any> 'All',
        EntityCollectionCast = <any> 'EntityCollectionCast',
        EntityRangeVariableReference = <any> 'EntityRangeVariableReference',
        SingleEntityFunctionCall = <any> 'SingleEntityFunctionCall',
        CollectionFunctionCall = <any> 'CollectionFunctionCall',
        EntityCollectionFunctionCall = <any> 'EntityCollectionFunctionCall',
        NamedFunctionParameter = <any> 'NamedFunctionParameter'
    }
}