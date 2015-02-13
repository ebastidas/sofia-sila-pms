/**
 * SilaLibBindingImpl.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package org.sila_standard;

import org.sila_standard.constants.Default;

public class SilaLibBindingImpl implements org.sila_standard.SilaLibPortType{
    public org.sila_standard.SiLAReturnValue delay(int requestId, java.lang.String lockId, java.lang.String duration) throws java.rmi.RemoteException {
    	return new SiLAReturnValue(Default.returnCode,Default.message,Default.duration,Default.deviceClass);
    }

    public org.sila_standard.SiLAReturnValue returnError(int requestId, java.lang.String lockId, java.lang.Boolean success, java.lang.Integer returnCode) throws java.rmi.RemoteException {
    	return new SiLAReturnValue(Default.returnCode,Default.message,Default.duration,Default.deviceClass);
    }

    public org.sila_standard.SiLAReturnValue sendErrorEvent(int requestId, java.lang.String lockId) throws java.rmi.RemoteException {
        return new SiLAReturnValue(Default.returnCode,Default.message,Default.duration,Default.deviceClass);
    }

    public org.sila_standard.SiLAReturnValue sendStatusEvent(int requestId, java.lang.String lockId, java.lang.String duration) throws java.rmi.RemoteException {
        return new SiLAReturnValue(Default.returnCode,Default.message,Default.duration,Default.deviceClass);
    }

    public org.sila_standard.SiLAReturnValue sendDataEvent(int requestId, java.lang.String lockId, java.lang.Integer countOfEvent) throws java.rmi.RemoteException {
        return new SiLAReturnValue(Default.returnCode,Default.message,Default.duration,Default.deviceClass);
    }

    public org.sila_standard.SiLAReturnValue sendDictionaryResult(int requestId, java.lang.String lockId, java.lang.Integer countOfKeyValuePairs) throws java.rmi.RemoteException {
        return new SiLAReturnValue(Default.returnCode,Default.message,Default.duration,Default.deviceClass);
    }

    public org.sila_standard.SiLAReturnValue sendArrayResult(int requestId, java.lang.String lockId, java.lang.Integer countOfValues) throws java.rmi.RemoteException {
        return new SiLAReturnValue(Default.returnCode,Default.message,Default.duration,Default.deviceClass);
    }

    public org.sila_standard.SiLAReturnValue sendSimpleResult(int requestId, java.lang.String lockId) throws java.rmi.RemoteException {
        return new SiLAReturnValue(Default.returnCode,Default.message,Default.duration,Default.deviceClass);
    }

    public org.sila_standard.SiLAReturnValue sendComplexResult(int requestId, java.lang.String lockId) throws java.rmi.RemoteException {
        return new SiLAReturnValue(Default.returnCode,Default.message,Default.duration,Default.deviceClass);
    }

    public org.sila_standard.SiLAReturnValue abort(int requestId, java.lang.String lockId) throws java.rmi.RemoteException {
        return new SiLAReturnValue(Default.returnCode,Default.message,Default.duration,Default.deviceClass);
    }

    public org.sila_standard.SiLAReturnValue doContinue(int requestId, java.lang.String lockId) throws java.rmi.RemoteException {
        return new SiLAReturnValue(Default.returnCode,Default.message,Default.duration,Default.deviceClass);
    }

    public void getDeviceIdentification(int requestId, java.lang.String lockId, org.sila_standard.holders.SiLAReturnValueHolder getDeviceIdentificationResult, org.sila_standard.holders.DeviceIdentificationHolder deviceDescription) throws java.rmi.RemoteException {
    	getDeviceIdentificationResult.value = new SiLAReturnValue(Default.returnCode,Default.message,Default.duration,Default.deviceClass);
    	deviceDescription.value = new DeviceIdentification( 
    				Default.wsdl,
    				Default.siLAInterfaceVersion,
    				Default.siLADeviceClass,
    				Default.siLADeviceClassVersion,
    				Default.siLASubDeviceClass,
    				Default.deviceManufacturer,
    				Default.deviceName,
    				Default.deviceSerialNumber,
    				Default.deviceFirmwareVersion);
    }

    public void getStatus(int requestId, org.sila_standard.holders.SiLAReturnValueHolder getStatusResult, javax.xml.rpc.holders.StringHolder deviceId, org.sila_standard.holders.StateHolder state, org.sila_standard.holders.CommandDescriptionArrayHolder subStates, javax.xml.rpc.holders.BooleanHolder locked, javax.xml.rpc.holders.StringHolder PMSId, javax.xml.rpc.holders.CalendarHolder currentTime) throws java.rmi.RemoteException {
    	getStatusResult.value = new SiLAReturnValue(Default.returnCode,Default.message,Default.duration,Default.deviceClass);
        deviceId.value = "deviceId:1";
        state.value = org.sila_standard.State.inError;
        subStates.value = new org.sila_standard.CommandDescription[0];
        locked.value = true;
        PMSId.value = "PMSId:1";
        currentTime.value = java.util.Calendar.getInstance();
    }

    public org.sila_standard.SiLAReturnValue initialize(int requestId, java.lang.String lockId) throws java.rmi.RemoteException {
        return new SiLAReturnValue(Default.returnCode,Default.message,Default.duration,Default.deviceClass);
    }

    public org.sila_standard.SiLAReturnValue getConfiguration(int requestId, java.lang.String lockId, java.lang.Integer configLevel, java.lang.String password) throws java.rmi.RemoteException {
        return new SiLAReturnValue(Default.returnCode,Default.message,Default.duration,Default.deviceClass);
    }

    public org.sila_standard.SiLAReturnValue setConfiguration(int requestId, java.lang.String lockId, java.lang.Integer configLevel, java.lang.String password, java.lang.String configXML) throws java.rmi.RemoteException {
        return new SiLAReturnValue(Default.returnCode,Default.message,Default.duration,Default.deviceClass);
    }

    public org.sila_standard.SiLAReturnValue lockDevice(int requestId, java.lang.String lockId, java.lang.String lockTimeout, java.lang.String eventReceiverURI, java.lang.String PMSId) throws java.rmi.RemoteException {
        return new SiLAReturnValue(Default.returnCode,Default.message,Default.duration,Default.deviceClass);
    }

    public org.sila_standard.SiLAReturnValue pause(int requestId, java.lang.String lockId) throws java.rmi.RemoteException {
        return new SiLAReturnValue(Default.returnCode,Default.message,Default.duration,Default.deviceClass);
    }

    public org.sila_standard.SiLAReturnValue reset(int requestId, java.lang.String lockId, java.lang.String deviceId, java.lang.String eventReceiverURI, java.lang.String PMSId, java.lang.String errorHandlingTimeout, boolean simulationMode) throws java.rmi.RemoteException {
        return new SiLAReturnValue(Default.returnCode,Default.message,Default.duration,Default.deviceClass);
    }

    public org.sila_standard.SiLAReturnValue unlockDevice(int requestId, java.lang.String lockId) throws java.rmi.RemoteException {
        return new SiLAReturnValue(Default.returnCode,Default.message,Default.duration,Default.deviceClass);
    }

}
