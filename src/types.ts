/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Classmate {
  id: string;
  nickname: string;
  errandsThisMonth: number;
  scheduleStatus: 'free' | 'busy' | 'resting'; // To simulate availability & reasons
  statusReason: string; // Explanation of availability
  favorsOwed: { [helperId: string]: number }; // How many times this classmate owes someone else an errand
}

export interface ErrandBooking {
  id: string;
  errandName: string;
  assignedToNickname: string;
  status: 'pending' | 'completed' | 'swapped';
  originalNickname?: string;
  helperNickname?: string;
  explanation: string;
  timestamp: string;
}

export interface AttackTest {
  id: string;
  prompt: string;
  isMalicious: boolean;
  response: string;
  defendedByRule: string;
  explanation: string;
  status: 'blocked' | 'success';
}

export interface Complaint {
  id: string;
  sender: string;
  complaintText: string;
  ethicalIssue: 'fairness' | 'privacy' | 'transparency' | 'human_oversight' | 'accountability';
  ethicalIssueKo: string;
  guideMessage: string;
  resolvedText: string;
}

export interface EthicsAgent {
  name: string;
  problem: string;
  goal: string;
  inputInfo: string;
  prohibitedActions: string;
  humanOversightMoment: string;
  privacyRule: string;
  fairnessRule: string;
}

export interface ImprovementLog {
  problemsFound: string;
  defenseRulesAdded: string;
  finalImprovements: string;
  reflectionText: string;
}
