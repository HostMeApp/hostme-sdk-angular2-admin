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

export interface Reservation {
    unreadMessageCount?: number;

    id?: string;

    restaurant?: models.RestaurantContactInfo;

    created?: Date;

    closed?: Date;

    reservationTime?: Date;

    status?: string;

    customerName?: string;

    groupSize?: number;

    phone?: string;

    notificationUrl?: string;

    areas?: string;

    note?: string;

    tableNumber?: string;

    highChair?: boolean;

    stroller?: boolean;

    estimatedTurnOverTime?: number;

    messages?: Array<models.Message>;

    membership?: models.MembershipInfo;

    type?: Reservation.TypeEnum;

    party?: boolean;

    customerProfile?: models.Profile;

}
export namespace Reservation {
    export enum TypeEnum {
        Standard = <any> 'Standard',
        Hybrid = <any> 'Hybrid'
    }
}
