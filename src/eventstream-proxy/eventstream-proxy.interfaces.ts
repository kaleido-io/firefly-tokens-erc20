// Copyright © 2024 Kaleido, Inc.
//
// SPDX-License-Identifier: Apache-2.0
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { WebSocketMessage } from '../websocket-events/websocket-events.base';
import { Event } from '../event-stream/event-stream.interfaces';

export interface EventProcessor {
  (msg: WebSocketMessage | undefined): void;
}

export interface ConnectionListener {
  onConnect: () => void | Promise<void>;
}

export interface EventListener {
  onEvent: (subName: string, event: Event) => undefined | Promise<WebSocketMessage | undefined>;
}

export interface WebSocketMessageWithId extends WebSocketMessage {
  namespace: string;
  id: string;
  batchNumber: number | undefined;
}

export interface WebSocketMessageBatchData {
  events: WebSocketMessage[];
}
