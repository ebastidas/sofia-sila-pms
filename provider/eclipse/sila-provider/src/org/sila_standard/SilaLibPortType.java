/**
 * SilaLibPortType.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package org.sila_standard;

public interface SilaLibPortType extends java.rmi.Remote {

    /**
     * <SiLACommandDescription xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     * isCommonCommand="true" estimatedDuration="PT10S" xsi:noNamespaceSchemaLocation="http://sila-standard.org/schemata/SoapAnnotation_1.2.xsd">
     * <Summary>This command sends a Delay request to the device</Summary>
     * <Parameter name="requestId" minValue="1" maxValue="2147483647"/>
     *           <Parameter name="lockId"/>
     *           <Parameter name="duration" xsi:type="Duration"/>
     *           <Response xsi:type="standardResponse" parameterSetCount="0">
     * <Description>Empty response</Description>
     *           </Response>
     *         </SiLACommandDescription>
     */
    public org.sila_standard.SiLAReturnValue delay(int requestId, java.lang.String lockId, java.lang.String duration) throws java.rmi.RemoteException;

    /**
     * <SiLACommandDescription isCommonCommand="true" estimatedDuration="PT10S"
     * xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://sila-standard.org/schemata/SoapAnnotation_1.2.xsd"
     * >
     * 				<Summary>return error</Summary>
     * 				<Parameter name="requestId" minValue="1" maxValue="2147483647"
     * />
     * 				<Parameter name="lockId" />
     * 				<Parameter name="success" />
     * 				<Parameter name="returnCode" minValue="1" maxValue="3000" />
     * 				<Response xsi:type="standardResponse" parameterSetCount="0" >
     * 					<Description>Empty response</Description>
     * 				</Response>
     * 			</SiLACommandDescription>
     */
    public org.sila_standard.SiLAReturnValue returnError(int requestId, java.lang.String lockId, java.lang.Boolean success, java.lang.Integer returnCode) throws java.rmi.RemoteException;

    /**
     * <SiLACommandDescription isCommonCommand="true" estimatedDuration="PT10S"
     * xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://sila-standard.org/schemata/SoapAnnotation_1.2.xsd"
     * >
     * 				<Summary>Send Error Event</Summary>
     * 				<Parameter name="requestId" minValue="1" maxValue="2147483647"
     * />
     * 				<Parameter name="lockId" />
     * 				<Response xsi:type="standardResponse" parameterSetCount="0" >
     * 					<Description>Empty response</Description>
     * 				</Response>
     * 			</SiLACommandDescription>
     */
    public org.sila_standard.SiLAReturnValue sendErrorEvent(int requestId, java.lang.String lockId) throws java.rmi.RemoteException;

    /**
     * <SiLACommandDescription isCommonCommand="true" estimatedDuration="PT10S"
     * xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://sila-standard.org/schemata/SoapAnnotation_1.2.xsd"
     * >
     * 				<Summary>send Status Event</Summary>
     * 				<Parameter name="requestId" minValue="1" maxValue="2147483647"
     * />
     * 				<Parameter name="lockId" />
     * 				<Parameter name="duration"  xsi:type="Duration" />
     * 				<Response xsi:type="standardResponse" parameterSetCount="0" >
     * 					<Description>Empty response</Description>
     * 				</Response>
     * 			</SiLACommandDescription>
     */
    public org.sila_standard.SiLAReturnValue sendStatusEvent(int requestId, java.lang.String lockId, java.lang.String duration) throws java.rmi.RemoteException;

    /**
     * <SiLACommandDescription isCommonCommand="true" estimatedDuration="PT10S"
     * xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://sila-standard.org/schemata/SoapAnnotation_1.2.xsd"
     * >
     * 				<Summary>send data event</Summary>
     * 				<Parameter name="requestId" minValue="1" maxValue="2147483647"
     * />
     * 				<Parameter name="lockId" />
     * 				<Parameter name="countOfEvent" minValue="1" maxValue="96" />
     * 				<Response xsi:type="standardResponse" parameterSetCount="2" >
     * 					<Description>response description not defined for this command</Description>
     * 					<Value name="pieces" type="Int" />
     * 					<Value name="weights" type="Double" />
     * 				</Response>
     * 			</SiLACommandDescription>
     */
    public org.sila_standard.SiLAReturnValue sendDataEvent(int requestId, java.lang.String lockId, java.lang.Integer countOfEvent) throws java.rmi.RemoteException;

    /**
     * <SiLACommandDescription isCommonCommand="true" estimatedDuration="PT10S"
     * xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://sila-standard.org/schemata/SoapAnnotation_1.2.xsd"
     * >
     * 				<Summary>test to send dictionary result</Summary>
     * 				<Parameter name="requestId" minValue="1" maxValue="2147483647"
     * />
     * 				<Parameter name="lockId" />
     * 				<Parameter name="countOfKeyValuePairs" minValue="1" maxValue="96"
     * />
     * 				<Response xsi:type="standardResponse" parameterSetCount="2" >
     * 					<Description>response description not defined for this command</Description>
     * 					<Value name="Key" type="String" />
     * 					<Value name="Value" type="String" />
     * 				</Response>
     * 			</SiLACommandDescription>
     */
    public org.sila_standard.SiLAReturnValue sendDictionaryResult(int requestId, java.lang.String lockId, java.lang.Integer countOfKeyValuePairs) throws java.rmi.RemoteException;

    /**
     * <SiLACommandDescription isCommonCommand="true" estimatedDuration="PT10S"
     * xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://sila-standard.org/schemata/SoapAnnotation_1.2.xsd"
     * >
     * 				<Summary>test command to send an Array</Summary>
     * 				<Parameter name="requestId" minValue="1" maxValue="2147483647"
     * />
     * 				<Parameter name="lockId" />
     * 				<Parameter name="countOfValues" minValue="1" maxValue="96" />
     * 				<Response xsi:type="standardResponse" parameterSetCount="2" >
     * 					<Description>response description not defined for this command</Description>
     * 					<Value name="Value" type="String" />
     * 				</Response>
     * 			</SiLACommandDescription>
     */
    public org.sila_standard.SiLAReturnValue sendArrayResult(int requestId, java.lang.String lockId, java.lang.Integer countOfValues) throws java.rmi.RemoteException;

    /**
     * <SiLACommandDescription isCommonCommand="true" estimatedDuration="PT10S"
     * xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://sila-standard.org/schemata/SoapAnnotation_1.2.xsd"
     * >
     * 				<Summary>test to send a simple result</Summary>
     * 				<Parameter name="requestId" />
     * 				<Parameter name="lockId" />
     * 				<Response xsi:type="standardResponse" parameterSetCount="1" >
     * 					<Description>response description not defined for this command</Description>
     * 					<Value name="Result" type="String" />
     * 				</Response>
     * 			</SiLACommandDescription>
     */
    public org.sila_standard.SiLAReturnValue sendSimpleResult(int requestId, java.lang.String lockId) throws java.rmi.RemoteException;

    /**
     * <SiLACommandDescription isCommonCommand="true" estimatedDuration="PT10S"
     * xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://sila-standard.org/schemata/SoapAnnotation_1.2.xsd"
     * >
     * 				<Summary>test to send complex result</Summary>
     * 				<Parameter name="requestId" />
     * 				<Parameter name="lockId" />
     * 				<Response xsi:type="standardResponse" parameterSetCount="1" >
     * 					<Description>response description not defined for this command</Description>
     * 				</Response>
     * 			</SiLACommandDescription>
     */
    public org.sila_standard.SiLAReturnValue sendComplexResult(int requestId, java.lang.String lockId) throws java.rmi.RemoteException;

    /**
     * <SiLACommandDescription isCommonCommand="true" estimatedDuration="PT0S"
     * xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://sila-standard.org/schemata/SoapAnnotation_1.2.xsd"
     * >
     * 				<Summary>This command aborts all running and pending asynchronous
     * commands of the device.</Summary>
     * 				<Parameter name="requestId" minValue="1" maxValue="2147483647"
     * >This parameter is the unique identification of this command call.</Parameter>
     * 				<Parameter name="lockId" >This parameter is the identification
     * of the PMS which has locked the device.</Parameter>
     * 				<Response xsi:type="standardResponse" parameterSetCount="0" >
     * 					<Description>Empty response</Description>
     * 				</Response>
     * 			</SiLACommandDescription>
     */
    public org.sila_standard.SiLAReturnValue abort(int requestId, java.lang.String lockId) throws java.rmi.RemoteException;

    /**
     * <SiLACommandDescription isCommonCommand="true" estimatedDuration="PT0S"
     * xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://sila-standard.org/schemata/SoapAnnotation_1.2.xsd"
     * >
     * 				<Summary>This command enables the continuation of the process
     * for a paused system.</Summary>
     * 				<Parameter name="requestId" minValue="1" maxValue="2147483647"
     * >This parameter is the unique identification of this command call.</Parameter>
     * 				<Parameter name="lockId" >This parameter is the identification
     * of the PMS which has locked the device.</Parameter>
     * 				<Response xsi:type="standardResponse" parameterSetCount="0" >
     * 					<Description>Empty response</Description>
     * 				</Response>
     * 			</SiLACommandDescription>
     */
    public org.sila_standard.SiLAReturnValue doContinue(int requestId, java.lang.String lockId) throws java.rmi.RemoteException;

    /**
     * <SiLACommandDescription isCommonCommand="true" estimatedDuration="PT0S"
     * xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://sila-standard.org/schemata/SoapAnnotation_1.2.xsd"
     * >
     * 				<Summary>This command reports on details of the device.</Summary>
     * 				<Parameter name="requestId" minValue="1" maxValue="2147483647"
     * >This parameter is the unique identification of this command call.</Parameter>
     * 				<Parameter name="lockId" >This parameter is the identification
     * of the PMS which has locked the device.</Parameter>
     * 				<Parameter name="deviceDescription" >The Device Identification.
     * It is a SOAP complex type.</Parameter>
     * 			</SiLACommandDescription>
     */
    public void getDeviceIdentification(int requestId, java.lang.String lockId, org.sila_standard.holders.SiLAReturnValueHolder getDeviceIdentificationResult, org.sila_standard.holders.DeviceIdentificationHolder deviceDescription) throws java.rmi.RemoteException;

    /**
     * <SiLACommandDescription isCommonCommand="true" estimatedDuration="PT0S"
     * xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://sila-standard.org/schemata/SoapAnnotation_1.2.xsd"
     * >
     * 				<Summary>This command reports the status of the device.</Summary>
     * 				<Parameter name="requestId" minValue="1" maxValue="2147483647"
     * >This parameter is the unique identification of this command call.</Parameter>
     * 				<Parameter name="deviceId" >The identification the device returns
     * to identify itself at the PMS.</Parameter>
     * 				<Parameter name="state" >Status of the device</Parameter>
     * 				<Parameter name="subStates" >Substate of the above state.</Parameter>
     * 				<Parameter name="locked" >Lock state of the device (locked=true,
     * unlocked = false)</Parameter>
     * 				<Parameter name="PMSId" >Identification of the PMS that locked
     * the device.</Parameter>
     * 				<Parameter name="currentTime" >Time of reporting status information.</Parameter>
     * 			</SiLACommandDescription>
     */
    public void getStatus(int requestId, org.sila_standard.holders.SiLAReturnValueHolder getStatusResult, javax.xml.rpc.holders.StringHolder deviceId, org.sila_standard.holders.StateHolder state, org.sila_standard.holders.CommandDescriptionArrayHolder subStates, javax.xml.rpc.holders.BooleanHolder locked, javax.xml.rpc.holders.StringHolder PMSId, javax.xml.rpc.holders.CalendarHolder currentTime) throws java.rmi.RemoteException;

    /**
     * <SiLACommandDescription isCommonCommand="true" estimatedDuration="PT1S"
     * xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://sila-standard.org/schemata/SoapAnnotation_1.2.xsd"
     * >
     * 				<Summary>This command initializes the device.</Summary>
     * 				<Parameter name="requestId" minValue="1" maxValue="2147483647"
     * >This parameter is the unique identification of this command call.</Parameter>
     * 				<Parameter name="lockId" >This parameter is the identification
     * of the PMS which has locked the device.</Parameter>
     * 				<Response xsi:type="standardResponse" parameterSetCount="0" >
     * 					<Description>Empty response</Description>
     * 				</Response>
     * 			</SiLACommandDescription>
     */
    public org.sila_standard.SiLAReturnValue initialize(int requestId, java.lang.String lockId) throws java.rmi.RemoteException;

    /**
     * <SiLACommandDescription isCommonCommand="true" estimatedDuration="PT0S"
     * xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://sila-standard.org/schemata/SoapAnnotation_1.2.xsd"
     * >
     * 				<Summary>The GetConfiguration command is used to a retrieve the
     * configuration of a device. It can only be invoked in the standby state.</Summary>
     * 				<Parameter name="requestId" minValue="1" maxValue="2147483647"
     * >This parameter is the unique identification of this command call.</Parameter>
     * 				<Parameter name="lockId" >This parameter is the identification
     * of the PMS, which has locked the device.</Parameter>
     * 				<Parameter name="configLevel" minValue="1" maxValue="2147483647"
     * >This parameter is defines the access level.</Parameter>
     * 				<Parameter name="password" >This parameter contains the password
     * for the corresponding configLevel.</Parameter>
     * 				<Response xsi:type="standardResponse" parameterSetCount="1" >
     * 					<Description>The configXML</Description>
     * 					<Value name="configXML" type="String" />
     * 				</Response>
     * 			</SiLACommandDescription>
     */
    public org.sila_standard.SiLAReturnValue getConfiguration(int requestId, java.lang.String lockId, java.lang.Integer configLevel, java.lang.String password) throws java.rmi.RemoteException;

    /**
     * <SiLACommandDescription isCommonCommand="true" estimatedDuration="PT1S"
     * xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://sila-standard.org/schemata/SoapAnnotation_1.2.xsd"
     * >
     * 				<Summary>The SetConfiguration command is used to set the configuration
     * of a device. This command can only be executed in the standby state.</Summary>
     * 				<Parameter name="requestId" minValue="1" maxValue="2147483647"
     * >This parameter is the unique identification of this command call.</Parameter>
     * 				<Parameter name="lockId" >This parameter is the identification
     * of the PMS, which has locked the device.</Parameter>
     * 				<Parameter name="configLevel" minValue="1" maxValue="2147483647"
     * >This parameter is defines the access level.</Parameter>
     * 				<Parameter name="password" >This parameter contains the password
     * for the corresponding configLevel.</Parameter>
     * 				<Parameter name="configXML" >The xml Document of configXML is
     * formatted as stated in the ParameterSet tag.</Parameter>
     * 				<Response xsi:type="standardResponse" parameterSetCount="0" >
     * 					<Description>Empty response</Description>
     * 				</Response>
     * 			</SiLACommandDescription>
     */
    public org.sila_standard.SiLAReturnValue setConfiguration(int requestId, java.lang.String lockId, java.lang.Integer configLevel, java.lang.String password, java.lang.String configXML) throws java.rmi.RemoteException;

    /**
     * <SiLACommandDescription isCommonCommand="true" estimatedDuration="PT0S"
     * xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://sila-standard.org/schemata/SoapAnnotation_1.2.xsd"
     * >
     * 				<Summary>This command locks the device for exclusive use.</Summary>
     * 				<Parameter name="requestId" minValue="1" maxValue="2147483647"
     * >This parameter is the unique identification of this command call.</Parameter>
     * 				<Parameter name="lockId" >This parameter hands over the lock identification
     * of the PMS to the device. The device will only accept further commands,
     * if they use the same lockId.</Parameter>
     * 				<Parameter name="lockTimeout"  xsi:type="Duration" >If this parameter
     * is omitted, no timeout will be set. Otherwise the device will unlock
     * itself if it does not receive any commands within the timeout period.</Parameter>
     * 				<Parameter name="eventReceiverURI" >Service URI of the Service
     * Consumer's event Receiver.</Parameter>
     * 				<Parameter name="PMSId" >Id of the PMS in order to identify the
     * PMS that locked a device.</Parameter>
     * 				<Response xsi:type="standardResponse" parameterSetCount="0" >
     * 					<Description>Empty response</Description>
     * 				</Response>
     * 			</SiLACommandDescription>
     */
    public org.sila_standard.SiLAReturnValue lockDevice(int requestId, java.lang.String lockId, java.lang.String lockTimeout, java.lang.String eventReceiverURI, java.lang.String PMSId) throws java.rmi.RemoteException;

    /**
     * <SiLACommandDescription isCommonCommand="true" estimatedDuration="PT0S"
     * xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://sila-standard.org/schemata/SoapAnnotation_1.2.xsd"
     * >
     * 				<Summary>This command pauses the process/workflow in order to
     * enable user intervention.</Summary>
     * 				<Parameter name="requestId" minValue="1" maxValue="2147483647"
     * >This parameter is the unique identification of this command call.</Parameter>
     * 				<Parameter name="lockId" >This parameter is the identification
     * of the PMS which has locked the device.</Parameter>
     * 				<Response xsi:type="standardResponse" parameterSetCount="0" >
     * 					<Description>Empty response</Description>
     * 				</Response>
     * 			</SiLACommandDescription>
     */
    public org.sila_standard.SiLAReturnValue pause(int requestId, java.lang.String lockId) throws java.rmi.RemoteException;

    /**
     * <SiLACommandDescription isCommonCommand="true" estimatedDuration="PT0S"
     * xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://sila-standard.org/schemata/SoapAnnotation_1.2.xsd"
     * >
     * 				<Summary>This command is used to reset the Service Provider at
     * any time from any state.</Summary>
     * 				<Parameter name="requestId" minValue="1" maxValue="2147483647"
     * >This parameter is the unique identification of this command call.</Parameter>
     * 				<Parameter name="lockId" >This parameter is the identification
     * of the PMS which has locked the device.</Parameter>
     * 				<Parameter name="deviceId" >The identification the device returns
     * to identify itself at the PMS.</Parameter>
     * 				<Parameter name="eventReceiverURI" >Connection information of
     * the Service Consumers event Receiver.</Parameter>
     * 				<Parameter name="PMSId" >Id of the PMS in order to identify the
     * PMS that locked a device.</Parameter>
     * 				<Parameter name="errorHandlingTimeout"  xsi:type="Duration" >Timeout
     * until an errorhandling state is changed into an error state.</Parameter>
     * 				<Parameter name="simulationMode" >Selects simulation mode.</Parameter>
     * 				<Response xsi:type="standardResponse" parameterSetCount="0" >
     * 					<Description>Empty response</Description>
     * 				</Response>
     * 			</SiLACommandDescription>
     */
    public org.sila_standard.SiLAReturnValue reset(int requestId, java.lang.String lockId, java.lang.String deviceId, java.lang.String eventReceiverURI, java.lang.String PMSId, java.lang.String errorHandlingTimeout, boolean simulationMode) throws java.rmi.RemoteException;

    /**
     * <SiLACommandDescription isCommonCommand="true" estimatedDuration="PT0S"
     * xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://sila-standard.org/schemata/SoapAnnotation_1.2.xsd"
     * >
     * 				<Summary>This command is used to unlock the device.</Summary>
     * 				<Parameter name="requestId" minValue="1" maxValue="2147483647"
     * >This parameter is the unique identification of this command call.</Parameter>
     * 				<Parameter name="lockId" >This parameter is the identification
     * of the PMS which has locked the device.</Parameter>
     * 				<Response xsi:type="standardResponse" parameterSetCount="0" >
     * 					<Description>Empty response</Description>
     * 				</Response>
     * 			</SiLACommandDescription>
     */
    public org.sila_standard.SiLAReturnValue unlockDevice(int requestId, java.lang.String lockId) throws java.rmi.RemoteException;
}
